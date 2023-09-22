const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Product'
    }],
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
})
let cartModel = mongoose.model('Cart', cartSchema);

module.exports = cartModel; 