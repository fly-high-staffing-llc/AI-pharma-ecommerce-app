# Pharmacy E-Commerce Platform – Backend Feature Prompts

## User Service

**User Story:**
_As a user, I want to sign up, log in, and manage my profile securely._

- Node.js + Express + Apollo Server
- MongoDB User model: `_id, name, email, passwordHash, role, phone, address, createdAt`
- REST: `POST /signup`, `POST /login`, `GET /profile`
- GraphQL: typeDefs/resolvers for login, getUser, updateUser
- JWT auth with bcrypt, role-based middleware
- Refresh token: `/api/auth/refresh`

---

## Product Service

**User Story:**
_As an admin, I want to manage products and upload inventory in bulk._

- GraphQL + REST service
- MongoDB Product model: `_id, name, brand, category, symptoms[], price, description, imageUrl, inStock`
- REST: `GET /products`, `POST /products`, `POST /products/upload-csv`
- GraphQL: queries/mutations for products
- Admin-only mutation for product upload

---

## Order Service

**User Story:**
_As a user, I want to manage my cart and orders, and receive real-time updates on order status._

- Node.js service for cart and orders
- MongoDB models:
  - Cart: `{ _id, userId, items: [{ productId, quantity }], updatedAt }`
  - Order: `{ _id, userId, products, total, status, createdAt, updatedAt }`
- GraphQL: `getOrders(userId)`, `getOrderDetails(orderId)`
- Mutations: `createOrder()`, `updateOrderStatus()`
- REST for cart: `GET/POST/DELETE /cart`
- Integrate with Socket.IO for order status updates

---

## Common Middleware

**User Story:**
_As a developer, I want reusable middleware for security, logging, and CORS._

- Implement:
  - `cors.ts`: Allow frontend and mobile origins
  - `auth.ts`: Decode and verify JWT
  - `rateLimit.ts`: Express-rate-limit setup
  - `logger.ts`: Winston logger with file and console transports 