const express = require('express');
const router = express.Router();
const Cart = require('../Models/cartModel');
const Product = require('../Models/productModel');
const User = require('../Models/userModel');
const protectedRoute = require('../Middleware/protectedRoute');


// Add a product to the user's cart
router.post('/addProductToCart/:userId/:productId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const productId = req.params.productId;

        // Find the user's cart or create a new one if it doesn't exist
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            // Create a new cart for the user
            cart = new Cart({ user: userId, products: [] });
        }

        // Check if the product is already in the cart to prevent duplicates
        if (cart.products.includes(productId)) {
            return res.status(400).json({ error: 'Product already in the cart' });
        }

        // Add the product to the cart
        cart.products.push(productId);

        // Save the cart with the new product added
        await cart.save();

        res.json({ message: 'Product added to cart successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



// Update the user's cart by cart and product id
router.put('/updatecart/:id/:productId', protectedRoute, async (req, res) => {
    try {
        const { productId } = req.params;
        const {id}=req.params; // Extract productId from URL parameter
        const findProduct = await Product.findById(productId);
        if (!findProduct) {
            return res.status(400).json({ error: `Product with this ${productId} not found` })
        }
        const cartExist=await Cart.findById(id);
        if (!cartExist) {
            return res.status(400).json({ error: `Cart with this ${id} not found` })
        }
        // Find the cart by ID and update its products
        await Cart.findByIdAndUpdate(req.params.id, {
            products: productId
        });

        res.json({ result: 'Cart updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// Delete products from the cart by cart ID
router.delete('/deleteproductsfromcart/:id', async (req, res) => {
    try {
        const {id}=req.params;
        const cartExist=await Cart.findById(id);
        if (!cartExist) {
            return res.status(400).json({ error: `Cart with this ${id} not found` })
        }
        await Cart.findByIdAndUpdate(req.params.id, {
            products: [],
        });

        res.json({ result: 'Products deleted from the cart successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// To get the user's cart by userid
router.get('/getByUserId/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        // Log the incoming user ID for debugging purposes
        console.log('Received userId:', userId);

        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            console.log('Cart not found for userId:', userId);
            return res.status(404).json({ error: 'Cart not found' });
        }

        res.json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;