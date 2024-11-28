import { Request, Response } from 'express';
import { OrderService } from './order.service';

export const OrderController = {
  createOrder: async (req: Request, res: Response) => {
    try {
      const order = await OrderService.createOrder(req.body);
      res.status(201).json({
        message: 'Order created successfully',
        success: true,
        data: order,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error creating order', success: false, error });
    }
  },
  getRevenue: async (req: Request, res: Response) => {
    try {
      const revenue = await OrderService.getRevenue();
      res.json({
        message: 'Revenue calculated successfully',
        success: true,
        data: revenue,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error calculating revenue', success: false, error });
    }
  },
};
