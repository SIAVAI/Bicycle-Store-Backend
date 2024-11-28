import { Product } from '../../Models/ProductModel/product.model';
import { IntProduct } from './product.interface';

export const ProductService = {
  createProduct: async (productData: IntProduct) => {
    return await Product.create(productData);
  },
  getAllProducts: async () => {
    return await Product.find();
  },
  getProductById: async (id: string) => {
    return await Product.findById(id);
  },
  updateProduct: async (id: string, updateData: Partial<IntProduct>) => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
  },
  deleteProduct: async (id: string) => {
    return await Product.findByIdAndDelete(id);
  },
};
