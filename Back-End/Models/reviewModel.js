const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Product'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    comment:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
})
let reviewModel = mongoose.model('Review', reviewSchema);

module.exports = reviewModel; 