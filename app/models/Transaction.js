import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  panCard: { type: String, required: true },
  name: { type: String, required: true },
  income: { type: Number, required: true },
  tax: { type: Number, required: true },
  timestamp: { type: String, required: true },
  blockHash: { type: String, required: true },
  transactionHash: { type: String, required: true },
});

export default mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);
