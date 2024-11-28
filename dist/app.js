"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = require("./app/Modules/ProductModule/product.router");
const order_router_1 = require("./app/Modules/OrderModules/order.router");
const app = (0, express_1.default)();
//Parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Check Endpoint
app.get('/', (req, res) => {
    res
        .json({ message: 'Bicycle Store API is running', success: true })
        .send('Bi-Cycle Store is running 🚀🚴‍♂️');
});
// API Routes
app.use('/api/products', product_router_1.ProductRouter);
app.use('/api/orders', order_router_1.OrderRouter);
exports.default = app;
