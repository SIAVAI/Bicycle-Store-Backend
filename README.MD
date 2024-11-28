# 🚴 Bicycle Store Backend

A backend application for managing a bicycle store. Built with **TypeScript**, **Express**, and **MongoDB**, this project allows CRUD operations for bicycles and orders, handles inventory management, and calculates total revenue using MongoDB's aggregation pipeline.

---

## 🚀 Live Demo

Check out the live API [here](https://bi-cycle.vercel.app/).

## **Features**

- **Product Management:**

  - Create a new bicycle.
  - Retrieve all bicycles or filter them by `name`, `brand`, or `type`.
  - Retrieve a specific bicycle by its ID.
  - Update bicycle details (e.g., price, quantity).
  - Delete a bicycle.

- **Order Management:**

  - Place an order for a bicycle.
  - Automatically update inventory upon order placement.
  - Handle insufficient stock scenarios gracefully.
  - Calculate total revenue from all orders.

- **Error Handling:**

  - Detailed error messages for validation and operational failures.
  - Structured error responses for easy debugging.

- **Database Integration:**
  - Mongoose for schema validation and data operations.
  - MongoDB aggregation for revenue calculations.

---

## **Project Structure**

```plaintext
src/
├── app.ts                  # Application setup
├── server.ts               # Entry point
├── config/                 # Configuration files
│   └── index.ts            # Configuration setup
└── app/                    # Application modules
    ├── models/             # Mongoose models
    │   ├── ProductModel/   # Product model folder
    │   │   └── product.model.ts
    │   ├── OrderModel/     # Order model folder
    │   │   └── order.model.ts
    └── modules/            # Feature modules
        ├── ProductModules/ # Product module folder
        │   ├── product.interface.ts
        │   ├── product.controller.ts
        │   ├── product.service.ts
        │   └── product.router.ts
        ├── OrderModules/   # Order module folder
            ├── order.interface.ts
            ├── order.controller.ts
            ├── order.service.ts
            └── order.router.ts

```

# API Endpoints

## Product Endpoints

| Endpoint                       | Method | Description              |
| ------------------------------ | ------ | ------------------------ |
| `/api/products/create-product` | POST   | Create a new bicycle     |
| `/api/products`                | GET    | Retrieve all bicycles    |
| `/api/products/:id`            | GET    | Retrieve a bicycle by ID |
| `/api/products/:id`            | PUT    | Update bicycle details   |
| `/api/products/:id`            | DELETE | Delete a bicycle         |

## Order Endpoints

| Endpoint              | Method | Description             |
| --------------------- | ------ | ----------------------- |
| `/api/orders`         | POST   | Place an order          |
| `/api/orders/revenue` | GET    | Calculate total revenue |


