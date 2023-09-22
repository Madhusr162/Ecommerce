const express = require('express');
const router = express.Router();
const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const bcryptjs = require('bcryptjs');
const protectedRoute = require('../Middleware/protectedRoute');

// register route to make the registration for the user
router.post("/register", function (req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ error: "One or more mandatory field is missing" });
    User.findOne({ email: email })
        .then((userInDB) => {
            if (userInDB)
                return res.status(500).json({ error: "User with this email already registered" });
            bcryptjs.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new User({ name, email, password: hashedPassword });
                    user.save()
                        .then((newUser) => {
                            res.status(201).json({ result: "User signed up successfully" });
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
        })
        .catch((err) => {
            console.log(err);
        })
})

// login route to make the user login with the particular email and password which is already registered
router.post("/login", function (req, res) {
    const { Email, Password } = req.body;
    if (!Email || !Password)
        return res.status(400).json({ error: "One or more mandatory field is missing" });
    User.findOne({ email: Email })
        .then((userInDB) => {
            if (!userInDB)
                return res.status(401).json({ error: "Invalid Credentials" });
            bcryptjs.compare(Password, userInDB.password)
                .then((didMatch) => {
                    if (didMatch) {
                        const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);
                        const userInfo = { "Email": userInDB.email, "Name": userInDB.name, "id": userInDB._id }
                        res.status(200).json({ result: { token: jwtToken, user: userInfo } });
                    } else {
                        return res.status(401).json({ error: "Invalid Credentials" });
                    }
                })
        })
        .catch((err) => {
            console.log(err);
        })
})

// To get a single user details
router.get("/user/:id", protectedRoute, (req, res) => {
    const id = req.params.id
    User.findById(id).select('-password')
        .populate("user", "_id name email address phone")
        .then((userInDB) => {
            if (!userInDB) {
                return res.status(403).json({ error: "Invalid user." });
            }
            return res.status(200).json(userInDB);
        })
        .catch((err) => console.error(err));
})

// To update user details
router.put("/user/:id/", protectedRoute, async (req, res) => {
    const loggedInUserId = req.user._id;
    const { name, address, phone, email } = req.body;
    const userIdToUpdate = req.params.id;
    console.log(loggedInUserId, userIdToUpdate);
    try {
        if (loggedInUserId.toString() === userIdToUpdate.toString()) {
            if (!address || !phone || !name || !email) {
                return res.status(400).json({ error: "One or more mandatory field is missing" });
            } else {
                await User.findByIdAndUpdate(userIdToUpdate, { address, phone, name, email });
                res.status(201).json({ result: "Details updated" });
            }
        } else {
            return res.status(403).json({ error: "You are not allowed to edit other user details" });
        }
    } catch (error) {
        console.error('Error updating user details:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
})

//delete user by admin
router.delete("/admin/:id/delete", protectedRoute, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const adminOrNot = await User.findById(req.user._id);

        if (!adminOrNot) {
            return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
        }

        const adminValue = adminOrNot.admin;
        console.log(adminValue);

        if (adminValue === "true") {
            if (!user) {
                return res.status(404).json({ error: `User not found with this id ${req.params.id}` });
            }

            const userValue = user ? user.admin : null; // Check if user is not null

            console.log(userValue);

            if (userValue !== "true") {
                await user.deleteOne();
                return res.status(200).json({
                    success: true,
                    message: "User deleted successfully"
                });
            } else {
                return res.status(500).json({ error: "You are not allowed to delete an admin user" });
            }
        } else {
            return res.status(500).json({ error: "You are not an admin to delete the user" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while processing your request" });
    }
});

//get all user by admin
router.get("/admin/alluser", protectedRoute, async (req, res) => {
    const adminOrNot = await User.findById(req.user._id);

        if (!adminOrNot) {
            return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
        }

        const adminValue = adminOrNot.admin;
        console.log(adminValue);

        if (adminValue === "true") {
    User.find().sort({ createdAt: 'desc' }).select('-password')
        .then((dbUsers) => {
            res.status(200).json({ Users: dbUsers })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    else{
        return res.status(401).json({error: "you are not allowed to see all the users"})
    }
})


module.exports = router;