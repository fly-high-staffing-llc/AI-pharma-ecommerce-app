# Pharmacy E-Commerce Platform – Backend

## 🚀 Prerequisites & Setup

**All developers must follow the [SETUP_GUIDE.md](./SETUP_GUIDE.md) before starting development.**

This guide covers all required tools, installation steps, and troubleshooting for Mac and Windows.

---

Node.js Microservices Architecture for Pharmacy E-Commerce Platform

## 🏗️ Architecture

- **Framework**: Node.js + Express.js
- **Architecture**: Microservices
- **Database**: MongoDB Atlas
- **API**: REST + GraphQL (Apollo Server)
- **Authentication**: JWT + Bcrypt
- **Real-time**: Socket.IO

## 📦 Project Structure

```
backend/
├── user-service/              # User Authentication & Management
│   ├── src/
│   │   ├── models/
│   │   │   └── User.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   └── users.ts
│   │   ├── middleware/
│   │   │   └── auth.ts
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── graphql/
│   │   │   ├── schema.ts
│   │   │   └── resolvers.ts
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
├── product-service/           # Product & Inventory Management
│   ├── src/
│   │   ├── models/
│   │   │   └── Product.ts
│   │   ├── routes/
│   │   │   ├── products.ts
│   │   │   └── categories.ts
│   │   ├── services/
│   │   │   └── product.service.ts
│   │   ├── graphql/
│   │   │   ├── schema.ts
│   │   │   └── resolvers.ts
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
├── order-service/            # Order & Cart Management
│   ├── src/
│   │   ├── models/
│   │   │   ├── Order.ts
│   │   │   └── Cart.ts
│   │   ├── routes/
│   │   │   ├── orders.ts
│   │   │   └── cart.ts
│   │   ├── services/
│   │   │   └── order.service.ts
│   │   ├── graphql/
│   │   │   ├── schema.ts
│   │   │   └── resolvers.ts
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
├── shared/                   # Shared Utilities
│   ├── database/
│   │   └── connection.ts
│   ├── middleware/
│   │   ├── cors.ts
│   │   ├── rateLimit.ts
│   │   └── errorHandler.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   └── validation.ts
│   └── types/
│       └── index.ts
├── docker-compose.yml
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas Account
- Docker (optional)

### Installation

1. **Clone Repository**
```bash
git clone <backend-repo-url>
cd backend
```

2. **Install Dependencies**
```bash
npm run install:all
```

3. **Environment Setup**
```bash
cp .env.example .env
# Configure your environment variables
```

4. **Start Development**
```bash
npm run dev
```

5. **Start Individual Services**
```bash
# User Service
cd user-service && npm run dev

# Product Service
cd product-service && npm run dev

# Order Service
cd order-service && npm run dev
```

## 🔧 Services

### User Service (Port: 3001)
- Authentication (JWT)
- User management
- Role-based access control
- Profile management

**Endpoints:**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile

### Product Service (Port: 3002)
- Product catalog
- Inventory management
- Category management
- Search and filtering

**Endpoints:**
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Order Service (Port: 3003)
- Shopping cart
- Order management
- Payment processing
- Order tracking

**Endpoints:**
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add to cart
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `PUT /api/orders/:id/status` - Update order status

## 🗄️ Database Schema

### User Schema
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed),
  role: Enum['customer', 'pharmacist', 'admin'],
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  preferences: {
    notifications: Boolean,
    marketing: Boolean
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Product Schema
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  category: Enum['OTC', 'Prescription', 'Health Food', 'Drinks'],
  symptoms: [String],
  brand: String,
  price: Number,
  inStock: Boolean,
  stockQuantity: Number,
  imageUrl: String,
  ingredients: [String],
  dosage: String,
  expiryDate: Date,
  requiresPrescription: Boolean,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Order Schema
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    name: String,
    price: Number,
    quantity: Number,
    imageUrl: String
  }],
  totalPrice: Number,
  status: Enum['placed', 'packed', 'shipped', 'delivered', 'cancelled'],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  paymentMethod: String,
  paymentStatus: Enum['pending', 'completed', 'failed'],
  prescriptionUrl: String,
  pharmacistNotes: String,
  estimatedDelivery: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Authentication & Authorization

### JWT Token Structure
```javascript
{
  userId: string,
  role: 'customer' | 'pharmacist' | 'admin',
  iat: number,
  exp: number
}
```

### Role-based Access
- **Customer**: Browse products, manage cart, place orders
- **Pharmacist**: View orders, verify prescriptions, chat support
- **Admin**: Full system access, user management, inventory

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### API Tests
```bash
npm run test:api
```

### Load Testing
```bash
npm run test:load
```

## 📦 Deployment

### Docker Deployment
```bash
# Build all services
docker-compose build

# Run all services
docker-compose up -d
```

### Environment Variables
```bash
# Database
MONGODB_URI=mongodb+srv://...

# JWT
JWT_SECRET=your-secret-key

# Services
USER_SERVICE_PORT=3001
PRODUCT_SERVICE_PORT=3002
ORDER_SERVICE_PORT=3003

# External Services
CLOUDINARY_URL=cloudinary://...
```

## 📊 Monitoring

- **Logging**: Winston
- **Error Tracking**: Sentry
- **Health Checks**: `/health` endpoints
- **Metrics**: Prometheus + Grafana

## 📝 License

MIT License - see LICENSE file for details 