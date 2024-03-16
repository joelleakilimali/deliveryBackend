import mongoose from 'mongoose';

const { Schema } = mongoose;

const marketSchema = new Schema(
  {
    shortId: String,
    name: { type: String, required: true },
    imageUrl: String,
    slogan: {
      type: String,
      default: '',
    },
    phoneNumber: { type: String, required: false },
    email: { type: String, required: false },
  },

  {
    timestamps: true,
  },
);

export const Market = mongoose.model('Market', marketSchema);
