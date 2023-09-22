const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');
const User = require('../Models/userModel');
const protectedRoute = require('../Middleware/protectedRoute');

//to add the product by admin
router.post("/admin/addcategory", protectedRoute, async (req, res) => {
    const adminOrNot = await User.findById(req.user._id);
    const { category } = req.body;

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {

        if (!category) {
            return res.status(500).json({ error: 'Category is mandatory' });
        } else {
            const category = new Product.category({
                category: category
            });
            category.save()
                .then((dbcategory) => {
                    res.status(201).json({ success: true, category: dbcategory });
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).json({ success: false, message: 'Internal server error' });
                });
        }
    }
    else {
        return res.status(401).json({ error: "you are not allowed to add the category" })
    }
})

// to update the category by admin
router.put("/admin/updatecategory/", protectedRoute, async (req, res) => {
    const { newcategory, oldcategory } = req.body;
    try {
        if (oldcategory) {
            if (!newcategory) {
                return res.status(400).json({ error: "New category is missing" });
            } else {
                await Product.category(oldcategory, { newcategory });
                res.status(201).json({ result: "Category updated" });
            }
        } else {
            return res.status(404).json({ error: `${oldcategory} not found` })
        }

    } catch (error) {
        console.error('Error updating category:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
})

// to delete category by admin
router.delete("/admin/:id/deletecategory", protectedRoute, async (req, res) => {
    const category = await Product.category.findById(req.params.id);
    if (!category) {
        return res.status(404).json({ error: `category not found with this id ${req.params.id}` })
    }
    await category.remove();
    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
})

module.exports = router;