const express = require('express');
const app = express.Router();
const multer = require('multer');
const Product = require('../Models/productModel');  //Import the Product model

 //Configure multer for file uploads
const storage = multer.memoryStorage();  //Store files in memory
const upload = multer({ storage });

 //Seed route to insert sample products into the database
app.get('/productsSeed', upload.single('image'), async (req, res) => {
  try {
     //Sample product data
    const sampleProducts = [
      {
        name: 'Black hoodie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        price: 1500,
        category_id: '650fcb8d32807c79b54c0ba9',
        stock: 20,
        images: [{image: 'https:images.unsplash.com/photo-1574586099306-30ce08418e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80'}]
      },
       {
         name: 'California hoodie',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 2200,
         category_id: '650fcb8d32807c79b54c0ba9',
         stock: 20,
         images: [{image: 'https:images.unsplash.com/photo-1637185766875-b64f2c6fff57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FsaWZvcm5pYSUyMGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]    
       },
       {
         name: 'Black and white hoodie',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 3200,
         category_id: '650fcb8d32807c79b54c0ba9',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1519400197429-404ae1a1e184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJsYWNrJTIwYW5kJTIwd2hpdGUlMjBob29kaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Streetwear hoodie',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 2000,
         category_id: '650fcb8d32807c79b54c0ba9',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1542406775-ade58c52d2e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyZWV0d2VhciUyMGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Yellow hoodie',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0ba9',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1533742616053-b8d05c9ae257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHllbGxvdyUyMGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Winter hoodie',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 900,
         category_id: '650fcb8d32807c79b54c0ba9',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdpbnRlciUyMGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Pink hoodie',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1000,
         category_id: '650fcb8d32807c79b54c0ba9',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1624191619330-2423058961bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGluayUyMGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Pista green hoodie',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0ba9',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1454793781512-0fafb38dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdyZWVuJTIwaG9vZGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Denim pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1624378441864-6eda7eac51cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGRlbmltJTIwcGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Black pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1599791325863-791a115c5084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwcGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Joggers',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1580906853203-f493cea9ff28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9nZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Cargo pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1584302052177-2e90841dad6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZ28lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Gym pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1671581084659-6cb26bb9dee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bSUyMHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Jean',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: '../Images/black hoodie.webp'}]
       },
       {
         name: 'Slimfit joggers',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1527181260677-e6943cf5738f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNsaW1maXQlMjBqb2dnZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Track pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 900,
         category_id: '650fcb8d32807c79b54c0baa',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1673278337791-665454cbed80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYWNrJTIwcGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Casual shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 900,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1656857783072-7b0bbad9cf96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lbiUyMGNhc3VhbCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 700,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Checked shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 600,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:plus.unsplash.com/premium_photo-1663076270897-f15d9a82ae43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcHVycGxlJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Flower shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1517191297489-48c463380e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwZmxvd2VyJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Jean shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1440606797942-6cc04c045447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwamVhbiUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Purple shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1100,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1602810318660-d2c46b750f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbiUyMHB1cnBsZSUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Slimfit casual shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 900,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwc2xpbWZpdCUyMGNhc3VhbCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Stylish shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bab',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1653146886577-0ea51f5b36f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbiUyMHN0eWxpc2glMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Saree',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1500,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Lehenga',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1574847872646-abff244bbd87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Long Frock',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1600,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:plus.unsplash.com/premium_photo-1682097559861-d5d5027868b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxvbmclMjBmcm9ja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'T-shirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 500,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1620196639702-311ce41b2be9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFkaWVzJTIwdHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Maroon gown',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1633076748086-b1a0f69405e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFyb29uJTIwZ293bnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Party wear',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1700,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1681639154072-3cc5aa5d4218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwcGFydHklMjB3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Rayon top',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1400,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1667665970124-2273c6ef3489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF5b24lMjBrdXJ0aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Black tops',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0bac',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1617037448248-6bd7b4a0d038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrJTIwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Checked trouser',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1570653321427-0e4d0c40bb84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNoZWNrZWQlMjAlMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Trouser',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 700,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1553247407-23251ce81f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWVuJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Jeans',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1669059921524-327a4c52cff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNoZWNrZWQlMjAlMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Olive pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1616769212339-9eea56b0014e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdvbWVuJTIwJTIwb2xpdmUlMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Black pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1552902875-9ac1f9fe0c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBibGFjayUyMHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Palazzo pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1616178193482-4dad15347c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx3b21lbiUyMHBhbGF6em8lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Solid pant',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBjYXJnbyUyMHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Cargo pants',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1800,
         category_id: '650fcb8d32807c79b54c0bad',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1600219824033-9a84dd41455c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZ3JlZW4lMjBza2lydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Green skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 600,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1532635239-06e08db8f247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdvbWVuJTIwJTIwc2tpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Jaipur skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1585167161314-7c7c3f133e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Maxi skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1800,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1533659828870-95ee305cee3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF4aSUyMHNraXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Mini skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 900,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1615898290907-0ad011905389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Short skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 800,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1534008622129-ec20ba669e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcnQlMjBza2lydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 600,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2tpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Green pleated skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 900,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1583278828941-7904abc0268f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNraXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Black and white skirt',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 700,
         category_id: '650fcb8d32807c79b54c0bae',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1615898290837-e9e8cdc3a7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNraXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'A line frock',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 900,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1552160753-117159821e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvbWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Fashion wear',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:plus.unsplash.com/premium_photo-1664367340541-6ce74a264a65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Jumpsuit',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:plus.unsplash.com/premium_photo-1661758301591-2e95773c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGp1bXBzdWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Suit',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 3000,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Party wear',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 5200,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1502451885777-16c98b07834a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Safari',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1900,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1615531068122-80040baba3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxraWRzJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'White Gown',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1900,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1652501025921-01c65e754b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGtpZHMlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}]
       },
       {
         name: 'Fancy dress',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         price: 1200,
         category_id: '650fcb8d32807c79b54c0baf',
         stock: 20,
           images: [{image: 'https:images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}]
       }]
    // Insert sample products into the database
    const insertedProducts = await Product.insertMany(sampleProducts);

    res.json({ message: 'Sample products seeded successfully', products: insertedProducts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error seeding sample products' });
  }
});
module.exports=app;

