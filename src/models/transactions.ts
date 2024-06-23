import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    shortId: String,
    description: String,
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    source: {
      type: String,
      enum: ['Cash', 'OrangeMoney', 'Mpesa'],
      default: 'Cash',
    },
  },
  {
    timestamps: true,
  },
);

export const Transaction = mongoose.model('Transaction', transactionSchema);
