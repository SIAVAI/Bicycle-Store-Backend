import { Request, Response } from 'express';
import { ProductService } from './product.service';

export const ProductController = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json({
        message: 'Bicycle created successfully',
        success: true,
        data: product,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error creating bicycle', success: false, error });
    }
  },
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const products = await ProductService.getAllProducts();
      res.json({
        message: 'Bicycles retrieved successfully',
        success: true,
        data: products,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error retrieving bicycles', success: false, error });
    }
  },
  getProductById: async (req: Request, res: Response) => {
    try {
      const product = await ProductService.getProductById(req.params.productId);
      if (!product)
        return res
          .status(404)
          .json({ message: 'Bicycle not found', success: false });
      res.json({
        message: 'Bicycle retrieved successfully',
        success: true,
        data: product,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error retrieving bicycle', success: false, error });
    }
  },
  updateProduct: async (req: Request, res: Response) => {
    try {
      const updatedProduct = await ProductService.updateProduct(
        req.params.productId,
        req.body,
      );
      res.json({
        message: 'Bicycle updated successfully',
        success: true,
        data: updatedProduct,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error updating bicycle', success: false, error });
    }
  },
  deleteProduct: async (req: Request, res: Response) => {
    try {
      await ProductService.deleteProduct(req.params.productId);
      res.json({ message: 'Bicycle deleted successfully', success: true });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error deleting bicycle', success: false, error });
    }
  },
};
