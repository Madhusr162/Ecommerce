const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    products: [{
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'Product'
    }],
    amount:{
        type: Number,
        required: true
    },
    paidAt: {
        type: Date
    },
    deliveredAt: {
        type: Date
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

let schema = mongoose.model('Order', orderSchema)

module.exports = schema;