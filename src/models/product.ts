import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    imageUrl: String,
    quantity: {
      type: Number,
      default: 0,
    },
    isAvailable: Boolean,
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model('Product', productSchema);
