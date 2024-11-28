import express, { Application } from 'express';
import cors from 'cors';
import { ProductRouter } from './app/Modules/ProductModule/product.router';
import { OrderRouter } from './app/Modules/OrderModules/order.router';

const app: Application = express();

//Parser
app.use(express.json());
app.use(cors());

// Check Endpoint
app.get('/', (req, res) => {
  res
    .json({ message: 'Bicycle Store API is running', success: true })
    .send('Bi-Cycle Store is running 🚀🚴‍♂️');
});

// API Routes
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);

export default app;
