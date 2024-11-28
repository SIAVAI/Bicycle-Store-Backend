import mongoose, { Schema } from 'mongoose';
import { IOrder } from '../../Modules/OrderModules/order.interface';

const OrderSchema: Schema = new Schema<IOrder>(
  {
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
