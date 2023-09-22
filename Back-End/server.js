const express = require('express');
const app=express();
var cors=require('cors');
const mongoose = require('mongoose');
const {MONGODB_URL} =require('./config')

mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", ()=>{
    console.log("DB connected");
});
mongoose.connection.on("error",()=>{
    console.log("Not able to connect to DB");
});

app.use(cors());
app.use(express.json());

require('./Models/userModel');
require('./Models/productModel');
require('./Models/orderModel');

app.use(require('./Routes/productsSeed'));
app.use(require('./Routes/userSeed'));
app.use(require('./Routes/productsRoute'));
app.use(require('./Routes/userRoute'));
app.use(require('./Routes/cartRoute'));
app.use(require('./Routes/categoryRoute'));
app.use(require('./Routes/orderRoute'));
app.use(require('./Routes/reviewRoute'));

app.listen(3000,()=>{
    console.log("server started");
})