const express = require('express');
const router = express.Router();
const {registerController}=require('../controllers/userController')

router.post('/register', (req, res) => {
  try {
    registerController(req, res);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});





module.exports = router;
