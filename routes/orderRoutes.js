import express from 'express';
import Order from '../models/Orders.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const orderDetails = req.body;

    const order = new Order(orderDetails);
    try {
        const savedOrder = await order.save();
        res.json({ success: true, message: 'Order processed successfully', order: savedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error processing order', error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
      const orders = await Order.find(); // Fetch all orders from the database
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
  });

export default router;
