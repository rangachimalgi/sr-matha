import express from 'express';
import dotenv from "dotenv"
import connectDB from './config/db.js'
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

// Load environment variables from .env
dotenv.config();

//connect to database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//use specific routes

// Define your routes
app.use('/api/auth', authRoutes)
app.use('/api/orders', orderRoutes);

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
