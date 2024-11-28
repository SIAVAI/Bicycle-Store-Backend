import { Order } from '../../Models/OrderModel/order.model';
import { Product } from '../../Models/ProductModel/product.model';
import { IOrder } from './order.interface';

export const OrderService = {
  createOrder: async (orderData: IOrder) => {
    const product = await Product.findById(orderData.product);
    if (!product || product.quantity < orderData.quantity) {
      throw new Error('Insufficient stock');
    }
    product.quantity -= orderData.quantity;
    product.inStock = product.quantity > 0;
    await product.save();
    return await Order.create(orderData);
  },
  getRevenue: async () => {
    return await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ]);
  },
};
