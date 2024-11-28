"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
router.post('/', order_controller_1.OrderController.createOrder);
router.get('/revenue', order_controller_1.OrderController.getRevenue);
exports.OrderRouter = router;
