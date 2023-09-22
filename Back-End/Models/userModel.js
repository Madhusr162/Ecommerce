const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address:{
        type: String
    },
    phone:{
        type: Number
    },
    createdAt :{
        type: Date,
        default: Date.now
    },
    admin:{
        type: String,
        default: false
    }
})




let model =  mongoose.model('User', userSchema);


module.exports = model;