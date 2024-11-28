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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
exports.ProductController = {
    createProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield product_service_1.ProductService.createProduct(req.body);
            res.status(201).json({
                message: "Bicycle created successfully",
                success: true,
                data: product,
            });
        }
        catch (error) {
            res
                .status(400)
                .json({ message: "Error creating bicycle", success: false, error });
        }
    }),
    getAllProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield product_service_1.ProductService.getAllProducts();
            res.json({
                message: "Bicycles retrieved successfully",
                success: true,
                data: products,
            });
        }
        catch (error) {
            res
                .status(400)
                .json({ message: "Error retrieving bicycles", success: false, error });
        }
    }),
    getProductById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield product_service_1.ProductService.getProductById(req.params.productId);
            if (!product) {
                res.status(404).json({
                    message: "Bicycle not found",
                    success: false,
                });
                return;
            }
            res.json({
                message: "Bicycle retrieved successfully",
                success: true,
                data: product,
            });
        }
        catch (error) {
            res.status(400).json({
                message: "Error retrieving bicycle",
                success: false,
                error,
            });
        }
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedProduct = yield product_service_1.ProductService.updateProduct(req.params.productId, req.body);
            res.json({
                message: "Bicycle updated successfully",
                success: true,
                data: updatedProduct,
            });
        }
        catch (error) {
            res
                .status(400)
                .json({ message: "Error updating bicycle", success: false, error });
        }
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield product_service_1.ProductService.deleteProduct(req.params.productId);
            res.json({ message: "Bicycle deleted successfully", success: true });
        }
        catch (error) {
            res
                .status(400)
                .json({ message: "Error deleting bicycle", success: false, error });
        }
    }),
};
