import mongoose, { Schema } from 'mongoose';
import { IntProduct } from '../../Modules/ProductModule/product.interface';

const ProductSchema: Schema = new Schema<IntProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const Product = mongoose.model<IntProduct>('Product', ProductSchema);
