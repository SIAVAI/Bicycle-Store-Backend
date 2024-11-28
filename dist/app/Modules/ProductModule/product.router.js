"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.post('/create-product', product_controller_1.ProductController.createProduct);
router.get('/', product_controller_1.ProductController.getAllProducts);
router.get('/:productId', product_controller_1.ProductController.getProductById);
router.put('/:productId', product_controller_1.ProductController.updateProduct);
router.delete('/:productId', product_controller_1.ProductController.deleteProduct);
exports.ProductRouter = router;
