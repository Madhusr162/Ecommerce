const express = require('express');
const app = express.Router();
const multer = require('multer');
const Product = require('../Models/productModel'); // Import the Product model

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Seed route to insert sample products into the database
app.get('/productsSeed', upload.single('image'), async (req, res) => {
  try {
    // Sample product data
    const sampleProducts = [
      {
        name: 'Black hoodie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        price: 1500,
        category: 'Men hoodies',
        stock: 20,
        images: [{image: 'https://images.unsplash.com/photo-1574586099306-30ce08418e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80'}]
      },
    //   {
    //     name: 'California hoodie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 2200,
    //     category: 'Men hoodies',
    //     stock: 20
    //   },
    //   {
    //     name: 'Black and white hoodie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 3200,
    //     category: 'Men hoodies',
    //     stock: 20
    //   },
    //   {
    //     name: 'Streetwear hoodie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 2000,
    //     category: 'Men hoodies',
    //     stock: 20
    //   },
    //   {
    //     name: 'Yellow hoodie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men hoodies',
    //     stock: 20
    //   },
    //   {
    //     name: 'Winter hoodie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 900,
    //     category: 'Men hoodies',
    //     stock: 20
    //   },
    //   {
    //     name: 'Pink hoodie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1000,
    //     category: 'Men hoodies',
    //     stock: 20
    //   },
    //   {
    //     name: 'Pista green hoodie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men hoodies',
    //     stock: 20
    //   },
    //   {
    //     name: 'Denim pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Black pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Joggers',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Cargo pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Gym pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Jean',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Slimfit joggers',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Track pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 900,
    //     category: 'Men pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Casual shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 900,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 700,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Checked shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 600,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Flower shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Jean shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Purple shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1100,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Slimfit casual shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 900,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Stylish shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Men shirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Saree',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1500,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'Lehenga',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'Long Frock',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1600,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'T-shirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 500,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'Maroon gown',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'Party wear',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1700,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'Rayon top',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1400,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'Black tops',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Women dresses',
    //     stock: 20
    //   },
    //   {
    //     name: 'Checked trouser',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Trouser',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 700,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Jeans',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Olive pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Black pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Palazzo pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Solid pant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Cargo pants',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1800,
    //     category: 'Women pants',
    //     stock: 20
    //   },
    //   {
    //     name: 'Green skirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 600,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Jaipur skirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Maxi skirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1800,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Mini skirs',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 900,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Short skirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 800,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Skirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 600,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Green pleated skirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 900,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'Black and white skirt',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 700,
    //     category: 'Women skirts',
    //     stock: 20
    //   },
    //   {
    //     name: 'A line frock',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 900,
    //     category: 'Kids',
    //     stock: 20
    //   },
    //   {
    //     name: 'Fashion wear',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Kids',
    //     stock: 20
    //   },
    //   {
    //     name: 'Jumpsuit',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Kids',
    //     stock: 20
    //   },
    //   {
    //     name: 'Suit',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 3000,
    //     category: 'Kids',
    //     stock: 20
    //   },
    //   {
    //     name: 'Party wear',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 5200,
    //     category: 'Kids',
    //     stock: 20
    //   },
    //   {
    //     name: 'Pink frock',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1900,
    //     category: 'Kids',
    //     stock: 20
    //   },
    //   {
    //     name: 'Safari',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1900,
    //     category: 'Kids',
    //     stock: 20
    //   },
    //   {
    //     name: 'Fancy dress',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    //     price: 1200,
    //     category: 'Kids',
    //     stock: 20
    //   },
      
      // Add more sample products as needed
    ];

    // Insert sample products into the database
    const insertedProducts = await Product.insertMany(sampleProducts);

    res.json({ message: 'Sample products seeded successfully', products: insertedProducts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error seeding sample products' });
  }
});
module.exports=app;

