const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [20, 'Product stock cannot exceed 20']
    },
    numOfReviews: {
        type: Number,
        default: 0,
        ref: 'Review'
    },
    user: {
        type : mongoose.Schema.Types.ObjectId
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema