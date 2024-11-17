require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRouter = require('./routes/userRoutes'); // Ensure this path is correct

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRouter);  // This will map all user routes under /api/users

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
