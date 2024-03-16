import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    shortId: String,
    name: { type: String, required: true },
    marketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Market' },
    imageUrl: String,
  },
  {
    timestamps: true,
  },
);

export const Category = mongoose.model('Category', categorySchema);
