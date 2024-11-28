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
exports.OrderService = void 0;
const order_model_1 = require("../../Models/OrderModel/order.model");
const product_model_1 = require("../../Models/ProductModel/product.model");
exports.OrderService = {
    createOrder: (orderData) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield product_model_1.Product.findById(orderData.product);
        if (!product || product.quantity < orderData.quantity) {
            throw new Error('Insufficient stock');
        }
        product.quantity -= orderData.quantity;
        product.inStock = product.quantity > 0;
        yield product.save();
        return yield order_model_1.Order.create(orderData);
    }),
    getRevenue: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield order_model_1.Order.aggregate([
            { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
        ]);
    }),
};
