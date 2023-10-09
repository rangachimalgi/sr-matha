import express from "express";
import dotenv from "dotenv";
import path, { dirname } from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.memoryStorage(); // This stores the file in memory as buffer
const upload = multer({ storage: storage });

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
app.use("api/auth", authRoutes);
app.use("api/orders", orderRoutes);
app.use('uploads', express.static(path.join(__dirname, 'uploads')));

//static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', function (req, res) {
  const index = path.join(__dirname,'client', 'build', 'index.html');
  res.sendFile(index);
});

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
