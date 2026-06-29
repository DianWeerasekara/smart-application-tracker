const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to mongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("API Working")
});

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})