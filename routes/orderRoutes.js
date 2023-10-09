import express from "express";
import Order from "../models/Orders.js";
import multer from "multer";
import { uploadReport, downloadReports, sendReportsByEmail } from "../controllers/OrderController.js";

const router = express.Router();

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post("/", async (req, res) => {
  const orderDetails = req.body;

  const order = new Order(orderDetails);
  try {
    const savedOrder = await order.save();
    res.json({
      success: true,
      message: "Order processed successfully",
      order: savedOrder,
    });
    console.log("orders 22", order);
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error processing order",
        error: error.message,
      });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders from the database
    console.log("orders", orders);
    res.json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
});

router.post('/:orderId/upload-report', upload.array('report'), uploadReport);
router.get("/:orderId/download-reports", downloadReports);
router.post("/:orderId/send-reports-by-email", sendReportsByEmail);

export default router;
