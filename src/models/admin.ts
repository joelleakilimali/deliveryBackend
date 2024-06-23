import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
      match:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    },
    password: { type: String, required: true },
    marketId: String,
    role: {
      type: String,
      enum: ['Admin', 'Delivery'],
      default: 'Admin',
    },
  },
  {
    timestamps: true,
  },
);

export const Admin = mongoose.model('Admin', adminSchema);
