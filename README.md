# 💊 Pharmacy E-Commerce Platform

A scalable, microfrontend-based e-commerce platform for pharmacy services with AI-powered assistance, real-time pharmacist collaboration, and personalized recommendations.

## 🏗️ System Architecture

### Frontend - Microfrontend Architecture
- **Framework**: Angular 17 (Web), React Native (Mobile)
- **Architecture**: Module Federation (Webpack 5) + Nx Monorepo
- **UI Libraries**: Angular Material, SCSS (Web), NativeBase (Mobile)
- **State Management**: NgRx (Angular), Redux Toolkit (React Native)

### Backend - Microservices
- **API Gateway**: Express.js with TypeScript
- **Services**: User, Product, Order, AI Services
- **GraphQL**: Apollo Server + Federation
- **Database**: MongoDB Atlas (Free Tier)

### AI & LLM Integration
- **LLM**: Mistral 7B (via Ollama) - Free & Local
- **Chatbot**: Express.js proxy to Ollama API
- **Image Recognition**: TensorFlow.js for pill identification

## 📦 Project Structure

```
pharmacy-ecommerce/
├── frontend/                 # Angular 17 Microfrontends
├── mobile/                   # React Native App
├── backend/                  # Node.js Microservices
├── middleware/               # BFF Layer
├── ai-service/              # LLM Integration
└── docs/                    # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas Account
- Ollama (for local LLM)

### Installation

1. **Clone & Setup**
```bash
git clone <repository>
cd pharmacy-ecommerce
npm install
```

2. **Start Backend Services**
```bash
cd backend
npm install
npm run dev
```

3. **Start Frontend**
```bash
cd frontend
npm install
npm start
```

4. **Start Mobile App**
```bash
cd mobile
npm install
npx expo start
```

5. **Setup LLM (Optional)**
```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Run Mistral
ollama run mistral
```

## 🎨 Theme & Design System

### Color Palette
- Primary: `#2A9D8F`
- Secondary: `#264653`
- Background: `#F1FAEE`
- Text: `#1D3557`
- Accent: `#E76F51`

### Typography
- Font Family: Inter, sans-serif
- Weights: 300, 400, 500, 600, 700

## 📱 User Roles & Features

### 👤 Customer
- Browse products by category
- AI-powered recommendations
- Cart & checkout
- Order tracking
- Chat with AI assistant

### 💊 Pharmacist
- View pending orders
- Verify prescriptions
- Chat with customers
- Update inventory

### 👩‍💼 Admin
- Manage user roles
- Upload inventory (CSV)
- View sales reports
- System analytics

## 🔧 Development

### Backend Services
- User Service: Authentication, roles, profiles
- Product Service: Inventory, categories, filters
- Order Service: Cart, checkout, tracking
- AI Service: Chatbot, recommendations

### Frontend Modules
- Shell App (Host)
- Products MFE
- Orders MFE
- User MFE
- Admin MFE

## 📊 Database Schema

### User Schema
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  role: Enum['customer', 'pharmacist', 'admin'],
  passwordHash: String,
  createdAt: Date
}
```

### Product Schema
```javascript
{
  _id: ObjectId,
  name: String,
  category: Enum['OTC', 'Prescription', 'Health Food', 'Drinks'],
  symptoms: [String],
  price: Number,
  inStock: Boolean,
  imageUrl: String
}
```

### Order Schema
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  products: [{productId: ObjectId, quantity: Number}],
  totalPrice: Number,
  status: Enum['placed', 'packed', 'shipped', 'delivered'],
  createdAt: Date
}
```

## 🧪 Testing

- **E2E**: Cypress
- **Unit**: Jest
- **API**: Postman/Swagger

## 🚀 Deployment

### Free Infrastructure
- **Backend**: Render.com / Railway
- **Database**: MongoDB Atlas (Free Tier)
- **Storage**: Cloudinary (Free Tier)
- **CI/CD**: GitHub Actions

## 📝 License

MIT License - see LICENSE file for details 