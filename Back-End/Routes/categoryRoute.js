const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');
const User = require('../Models/userModel');
const Category = require('../Models/categoryModel');
const protectedRoute = require('../Middleware/protectedRoute');

// To get all the category
router.get("/category", (req, res) => {
    Category.find().sort({ createdAt: 'desc' })
        .then((dbcategory) => {
            res.status(200).json({ Category: dbcategory })
        })
        .catch((error) => {
            console.log(error);
        })
})


//to add the product by admin
router.post("/admin/addcategory", protectedRoute, async (req, res) => {
    const adminOrNot = await User.findById(req.user._id);
    const { category, desc } = req.body;

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {

        if (!category || !desc) {
            return res.status(500).json({ error: 'Category name and description are mandatory' });
        } else {
            const newcategory = new Category({
                name: category,
                desc: desc
            });
            newcategory.save()
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
// router.put("/admin/updatecategory/", protectedRoute, async (req, res) => {
//     const { newcategory, oldcategory } = req.body;
//     const adminOrNot = await User.findById(req.user._id);

//     if (!adminOrNot) {
//         return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
//     }

//     const adminValue = adminOrNot.admin;
//     console.log(adminValue);

//     if (adminValue === "true") {
//         try {
//             if (oldcategory) {
//                 if (!newcategory) {
//                     return res.status(400).json({ error: "New category is missing" });
//                 } else {
//                     // Find the existing category by its name (case-insensitive)
//                     const existingCategory = await Category.findOne({
//                         category: { $regex: new RegExp(oldcategory, "i") }
//                     });

//                     if (!existingCategory) {
//                         return res.status(404).json({ error: `${oldcategory} not found` });
//                     }

//                     // Update the existing category with the new category value
//                     existingCategory.category = newcategory;
//                     await existingCategory.save();

//                     res.status(201).json({ result: "Category updated" });
//                 }
//             } else {
//                 return res.status(400).json({ error: "Old category is missing" });
//             }
//         } catch (error) {
//             console.error('Error updating category:', error);
//             return res.status(500).json({ error: "Internal server error" });
//         }
//     } else {
//         return res.status(401).json({ error: "You are not allowed to update the category" });
//     }
// });

// Update a category by ID
router.put("/admin/updatecategory/:categoryId", protectedRoute, async (req, res) => {
    const { newcategory, desc } = req.body;
    const categoryId = req.params.categoryId; // Get the category ID from the URL parameter
    const adminOrNot = await User.findById(req.user._id);

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {
        try {
            if (!newcategory) {
                return res.status(400).json({ error: "New category is missing" });
            } else {
                // Find the category by its ID and update its 'category' field
                const updatedCategory = await Category.findByIdAndUpdate(categoryId, { name: newcategory, desc: desc  }, { new: true });

                if (!updatedCategory) {
                    return res.status(404).json({ error: `Category with ID ${categoryId} not found` });
                }

                res.status(201).json({ result: "Category updated", updatedCategory });
            }
        } catch (error) {
            console.error('Error updating category:', error);
            return res.status(500).json({ error: "Internal server error" });
        }
    } else {
        return res.status(401).json({ error: "You are not allowed to update the category" });
    }
});



// to delete category by admin
router.delete("/admin/:id/deletecategory", protectedRoute, async (req, res) => {
    const category = await Category.findById(req.params.id);
    const adminOrNot = await User.findById(req.user._id);

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {
        if (!category) {
            return res.status(404).json({ error: `category not found with this id ${req.params.id}` })
        }
        await Category.deleteOne();
        res.status(200).json({
            success: true,
            message: "category deleted successfully"
        })
    } else {
        return res.status(401).json({ error: "You are not allowed to delete the category" });
    }
})

module.exports = router;