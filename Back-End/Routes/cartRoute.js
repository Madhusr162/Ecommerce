const express = require('express');
const router = express.Router();
const Cart =require('../Models/cartModel');
const Product =require('../Models/productModel');
const protectedRoute = require('../Middleware/protectedRoute');

// To add the products in cart
router.post("/cart/:id/addproduct", protectedRoute, async(req,res)=>{
const id=req.params.id;
const cartprod= await Product.findById(id);
if(!cartprod){
    return res.status(404).json({error: "Product does not exist"});
}
else{
    Cart.products.push(cartprod)
    return res.status(200).json({message: "Product added to cart"});
}
})

// To update the cart
router.put("/cart/:id/updateproduct", protectedRoute, async (req, res) => {
    const { count } = req.body;
    const id=req.params.id;
    const product=await Cart.findById(id);
    try {
            if (!count) {
                return res.status(400).json({ error: "One or more mandatory field is missing" });
            } else {
                await Cart.findByIdAndUpdate(product({count}));
                res.status(201).json({ result: "Details updated" });
            }
        } 
    catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
})
 
module.exports=router;