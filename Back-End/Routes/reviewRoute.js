const express = require('express');
const router = express.Router();
const Review = require('../Models/reviewModel');
const Product = require('../Models/productModel');
const protectedRoute = require('../Middleware/protectedRoute');

//to add the review by user
router.post("/addreview/:id", protectedRoute, async (req, res)=> {
    try {
        const { comment, rating } = req.body;
        const productId = req.params.id;
        const user = req.user._id;
        if (!comment || !rating) {
            return res.status(500).json({ error: 'One or more mandatory field is missing' });
        } else {
            const review = new Review({
                comment,
                rating,
                user,
                productId
            });
            review.save();
            // Retrieve the product for which the review is being added
            const product = await Product.findById(productId);

            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            // Increment the review count for the product
            product.numOfReviews += 1;

            // Save the updated product with the increased review count
            await product.save();

            res.json({ message: 'Review added successfully' });
        }
     } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

// To update the review by the user
router.put("/:id/updatereview", protectedRoute, async (req, res) => {
    const { comment, rating } = req.body;
    const reviewIdToUpdate = req.params.id;
    const review = await Review.findById(reviewIdToUpdate)
    
    try {
        if (reviewIdToUpdate) {
            if (!comment || !rating) {
                return res.status(400).json({ error: "One or more mandatory field is missing" });
            } else {
                //check if the review author is same as loggedin user only then allow updation
                if (review.user._id.toString() === req.user._id.toString()) {
                    review.comment = comment;
                    review.rating = rating;
        
                    // Save the updated review
                    await review.save();
                    return res.status(200).json({ success: true, message: "Review updated" });
                } else {
                    return res.status(403).json({ success: false, message: "you are not allowed to update this review" })
                }
            }
        }
        else{
            return res.status(400).json({error: "Review with this id not found"})
        }
    } catch (error) {
        console.error('Error updating review details:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
})

//To get all the reviews of particular user
router.get("/:id/allreviews", async (req, res) => {
    try {
        const userId = req.params.id;

        // Query the database to find all reviews associated with the user ID
        const userReviews = await Review.find({ user: userId });
        console.log(userId);

        // Send the reviews as a JSON response
        res.json(userReviews);
    } catch (error) {
        console.error('Error fetching user reviews:', error);
        res.status(500).json({ error: "Internal server error" });
    }
})

// to delete review by user
router.delete("/:id/deletereview", protectedRoute, async (req, res) => {
    const reviewIdToDelete = req.params.id;
    const review = await Review.findById(reviewIdToDelete)
    try {
        if (!review) {
            return res.status(400).json({ error: "Review does not exist" });
        } else {
            //check if the review author is same as loggedin user only then allow deletion
            if (review.user._id.toString() === req.user._id.toString()) {
                await review.deleteOne();
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
module.exports = router;