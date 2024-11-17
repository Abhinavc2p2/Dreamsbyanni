const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  console.log('GET /api/users requested');
  res.json({ message: 'User route works!' });
});

router.post('/add', (req, res) => {
  // Handle POST request to add user
  res.send('User added');
});

// Export the router
module.exports = router;
