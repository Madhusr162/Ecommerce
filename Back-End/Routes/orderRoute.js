const express = require('express');
const router = express.Router();
const Order = require('../Models/orderModel');
const User = require('../Models/userModel');
const protectedRoute = require('../Middleware/protectedRoute');

// to get all the orders of a particular user
router.get("/getorders", protectedRoute, async (req, res) => {
    const id = req.user._id;
    Order.findById(id)
        .populate("products", "_id name quantity image price product")
        .then((dbOrders) => {
            res.status(200).json({ orders: dbOrders });
        })
        .catch((err) => console.error(err));
})

// to show all the orders from the admin side
router.get("/admin/allorders", protectedRoute, async(req,res)=>{
    const adminOrNot = await User.findById(req.user._id);

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {
        Order.find().sort({createdAt: 'desc'})
        .populate("orders")
        .then((dbOrders) => {
            res.status(200).json({ orders: dbOrders })
        })
        .catch((error) => {
            console.log(error);
        })
    }
})

module.exports=router;
