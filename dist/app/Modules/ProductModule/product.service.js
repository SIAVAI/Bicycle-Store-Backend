"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("../../Models/ProductModel/product.model");
exports.ProductService = {
    createProduct: (productData) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_model_1.Product.create(productData);
    }),
    getAllProducts: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_model_1.Product.find();
    }),
    getProductById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_model_1.Product.findById(id);
    }),
    updateProduct: (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_model_1.Product.findByIdAndUpdate(id, updateData, { new: true });
    }),
    deleteProduct: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_model_1.Product.findByIdAndDelete(id);
    }),
};
