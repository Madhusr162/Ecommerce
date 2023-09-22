const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');
const protectedRoute = require('../Middleware/protectedRoute');

//to add the product by admin
router.post("/:id/addreview", protectedRoute, function (req, res) {
    const { comment, rating } = req.body;
    const user = req.user._id;
    if (!comment || !rating) {
        return res.status(500).json({ error: 'One or more mandatory field is missing' });
    } else {
        const review = new Product.reviews({
            comment: comment,
            rating: rating,
            user: user
        });
        review.save()
            .then((dbReview) => {
                res.status(201).json({ success: true, review: dbReview });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ success: false, message: 'Internal server error' });
            });
    }
})

// To update the review by the user
router.put("/:id/updatereview", protectedRoute, async (req, res) => {
    const { comment, rating } = req.body;
    const reviewIdToUpdate = req.params.id;
    const review = await Product.findById(reviewIdToUpdate)
    try {
        if (reviewIdToUpdate) {
            if (!comment || !rating) {
                return res.status(400).json({ error: "One or more mandatory field is missing" });
            } else {
                //check if the review author is same as loggedin user only then allow updation
                if (review.user._id.toString() === req.user._id.toString()) {
                    await review.push({comment: comment, rating: rating})
                    return res.status(200).json({ success: true, message: "Tweet deleted successfully" });
                } else {
                    return res.status(403).json({ success: false, message: "you are not allowed to update this review" })
                }
            }
        }
    } catch (error) {
        console.error('Error updating review details:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
})

//To get all the reviews of particular user
router.get("/:id/allreviews", async(req,res)=>{
const productId=req.params.id;
Product.findById(productId)
.populate("reviews", "_id name comment user")
.then((productInDB) => {
    if (!productInDB) {
        return res.status(403).json({ error: "Invalid product." });
    }
    return res.status(200).json(userInDB);
})
.catch((err) => console.error(err));

})

// to delete review by user
router.delete("/:id/deletereview",protectedRoute, async (req, res) => {
    const reviewIdToDelete = req.params.id;
    const review = await Product.findById(reviewIdToDelete)
    try {
        if (!reviewIdToDelete) {
                return res.status(400).json({ error: "Review does not exist" });
            } else {
                //check if the review author is same as loggedin user only then allow deletion
                if (review.user._id.toString() === req.user._id.toString()) {
                    await review.remove();
                    return res.status(200).json({ success: true, message: "Review deleted successfully" });
                } else {
                    return res.status(403).json({ success: false, message: "you are not allowed to delete this review" })
                }
            }
    } catch (error) {
        console.error('Error deleting review:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
   
})
module.exports=router;