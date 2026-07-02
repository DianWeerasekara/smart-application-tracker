const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const startInterviewReminderJob = require("./jobs/interviewReminderJob");

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const authRoutes = require('./routes/authRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

// Load environment variables
dotenv.config();

// Connect to mongoDB
connectDB();

// email reminder 
startInterviewReminderJob();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.get("/", (req, res) => {
    res.send("API Working")
});

app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes)

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})