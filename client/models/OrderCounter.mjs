import mongoose from 'mongoose';

const orderCounterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 1 },
});

const OrderCounter = mongoose.model('OrderCounter', orderCounterSchema);

export default OrderCounter;
