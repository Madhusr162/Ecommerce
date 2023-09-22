const express = require('express');
const app = express.Router();

const User = require('../Models/userModel'); // Import the Product model

// Seed route to insert sample users into the database
app.get('/userSeed', async (req, res) => {
    try {
      // Sample user data
      const sampleUsers = [
        {
            name: 'Madhubala S R',
            email: 'madhu@gmail.com',
            password: '123456'
          },
          {
            name: 'Naresh Manivannan',
            email: 'naresh@gmail.com',
            password: '123456'
          },
        ];
          // Insert sample users into the database
    const insertedUsers = await User.insertMany(sampleUsers);

    res.json({ message: 'Sample users seeded successfully', users: insertedUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error seeding sample users' });
  }
});
module.exports=app;