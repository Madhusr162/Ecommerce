const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');
const User = require('../Models/userModel');
const protectedRoute = require('../Middleware/protectedRoute');

//to get all the products
router.get("/products", (req, res) => {
    Product.find().sort({ createdAt: 'desc' })
        .then((dbProducts) => {
            res.status(200).json({ Products: dbProducts })
        })
        .catch((error) => {
            console.log(error);
        })
})

// To get a single product details
router.get("/product/:id", (req, res) => {
    const id = req.params.id
    Product.findById(id)
        .populate("_id name price description images category stock")
        .then((productInDB) => {
            if (!productInDB) {
                return res.status(403).json({ error: "Invalid product." });
            }
            return res.status(200).json(productInDB);
        })
        .catch((err) => console.error(err));
})

// to get products by category
// router.get("/products/category", protectedRoute, (req, res) => {
//     const categories = req.query.category; 
//     const keyword = req.query.keyword; // The keyword to search for (e.g., "hoodie")

//     // Create a case-insensitive regex pattern for the keyword
//     const keywordPattern = new RegExp(keyword, "i");

//     // Create an array of regex patterns for case-insensitive category matching
//     const categoryPatterns = categories.map((category) => new RegExp(category, "i"));

//     // Use the $or operator to match categories and the keyword
//     Product.find({
//         $and: [
//             { category: { $in: categoryPatterns } }, // Case-insensitive category search
//             { name: { $regex: keywordPattern } } // Case-insensitive keyword search
//         ]
//     })
//     .select("_id name price description images category stock")
//     .then((productsInCategories) => {
//         if (!productsInCategories || productsInCategories.length === 0) {
//             return res.status(403).json({ error: "No products matching the criteria." });
//         }
//         return res.status(200).json(productsInCategories);
//     })
//     .catch((err) => {
//         console.error(err);
//         return res.status(500).json({ error: "Internal server error" });
//     });
// });

router.get("/products/category", protectedRoute, async (req, res) => {
    const categories = req.query.category; // Assuming categories is an array of category names
    const keyword = req.query.keyword; // The keyword to search for (e.g., "hoodie")

    // Create a case-insensitive regex pattern for the keyword
    const keywordPattern = new RegExp(keyword, "i");

    try {
        const productsInCategories = await Product.find({
            $and: [
                { category: { $in: categories.map(category => new RegExp(category, "i")) } }, // Case-insensitive category search
                { name: { $regex: keywordPattern } } // Case-insensitive keyword search
            ]
        })
            .select("_id name price description images category stock");

        if (!productsInCategories || productsInCategories.length === 0) {
            return res.status(403).json({ error: "No products matching the criteria." });
        }

        return res.status(200).json(productsInCategories);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});


// to delete the product by admin
router.delete("/admin/:id/deleteproduct", protectedRoute, async (req, res) => {
    const adminOrNot = await User.findById(req.user._id);
    const product = await Product.findById(req.params.id);

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {
        if (!product) {
            return res.status(404).json({ error: `product not found with this id ${req.params.id}` })
        }
        await product.deleteOne();
        res.status(200).json({
            success: true,
            message: "product deleted successfully"
        })
    }
    else {
        return res.status(401).json({ error: "you are not allowed to delete the product" })
    }
})

//to add the product by admin
router.post("/admin/addproduct", protectedRoute, async (req, res) => {
    const adminOrNot = await User.findById(req.user._id);

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {
        const { name, price, desc, category, stock, images } = req.body;
        if (!name || !price || !desc || !category || !stock || !images) {
            return res.status(500).json({ error: 'One or more mandatory field is missing' });
        } else {
            const product = new Product({
                name: name,
                price: price,
                description: desc,
                category: category,
                stock: stock,
                images: images
            });
            product.save()
                .then((dbProduct) => {
                    res.status(201).json({ success: true, product: dbProduct });
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).json({ success: false, message: 'Internal server error' });
                });
        }
    }
    else {
        return res.status(401).json({ error: "you are not allowed to add the product" })
    }

})

// to update the product by admin
router.put("/admin/:id/update", protectedRoute, async (req, res) => {
    const adminOrNot = await User.findById(req.user._id);
    const { name, price, description, images, category, stock } = req.body;
    const productIdToUpdate = req.params.id;
    console.log(productIdToUpdate);

    if (!adminOrNot) {
        return res.status(404).json({ error: `User not found with this id ${req.user._id}` });
    }

    const adminValue = adminOrNot.admin;
    console.log(adminValue);

    if (adminValue === "true") {
        try {
            if (productIdToUpdate) {
                if (!name || !price || !description || !images || !category || !stock) {
                    return res.status(400).json({ error: "One or more mandatory field is missing" });
                } else {
                    await Product.findByIdAndUpdate(productIdToUpdate, { name, price, description, images, category, stock });
                    res.status(201).json({ result: "Details updated" });
                }
            } else {
                return res.status(404).json({ error: `Product with this ${productIdToUpdate} not found` })
            }

        } catch (error) {
            console.error('Error updating user details:', error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
    else {
        return res.status(401).json({ error: "you are not allowed to update the product" })
    }

})

module.exports = router;