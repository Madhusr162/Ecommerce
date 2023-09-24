const express = require('express');
const app = express.Router();

const Category = require('../Models/categoryModel'); // Import the Product model

// Seed route to insert sample users into the database
app.get('/categorySeed', async (req, res) => {
    try {
      // Sample category data
      const sampleCategory = [
        {
            name: 'Men hoodies',
            desc: 'This is a category for men hoodies'
          },
          {
            name: 'Men pants',
            desc: 'This is a category for men pants'
          },
          {
            name: 'Men shirts',
            desc: 'This is a category for men shirts'
          },
          {
            name: 'Women dresses',
            desc: 'This is a category for women dresses'
          },
          {
            name: 'Women pants',
            desc: 'This is a category for women pants'
          },
          {
            name: 'Women skirts',
            desc: 'This is a category for women skirts'
          },
          {
            name: 'Kids',
            desc: 'This is a category for kids'
          },
        ];
          // Insert sample users into the database
    const insertedCategory = await Category.insertMany(sampleCategory);

    res.json({ message: 'Sample categories seeded successfully', category: insertedCategory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error seeding sample categories' });
  }
});
module.exports=app;