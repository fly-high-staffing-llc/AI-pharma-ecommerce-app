# 💊 Pharmacy E-Commerce Platform - Complete Repository Structure

## 📋 Overview

This document outlines the complete file structure for all four repositories of the Pharmacy E-Commerce Platform:

1. **Frontend Repository** - Angular 17 Microfrontends
2. **Backend Repository** - Node.js Microservices
3. **AI-Service Repository** - LLM & AI Services
4. **Mobile Repository** - React Native Mobile App

---

## 🖥️ 1. Frontend Repository (Angular 17 Microfrontends)

### Repository Structure
```
frontend-repo/
├── README.md
├── package.json
├── .gitignore
├── .env.example
├── shell-app/                    # Host Application
│   ├── package.json
│   ├── webpack.config.js
│   ├── tsconfig.json
│   ├── src/
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app.routing.ts
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   ├── footer/
│   │   │   │   ├── navigation/
│   │   │   │   └── layout/
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── api.service.ts
│   │   │   │   └── socket.service.ts
│   │   │   ├── store/
│   │   │   │   ├── actions/
│   │   │   │   ├── effects/
│   │   │   │   ├── reducers/
│   │   │   │   └── selectors/
│   │   │   └── guards/
│   │   └── styles/
│   │       ├── theme.scss
│   │       ├── global.scss
│   │       └── variables.scss
├── mfe-products/                 # Products Microfrontend
│   ├── package.json
│   ├── webpack.config.js
│   ├── tsconfig.json
│   └── src/
│       ├── main.ts
│       └── app/
│           ├── products.module.ts
│           ├── components/
│           │   ├── product-list/
│           │   ├── product-detail/
│           │   ├── product-filter/
│           │   └── product-search/
│           ├── services/
│           │   └── product.service.ts
│           └── store/
│               ├── actions/
│               ├── effects/
│               └── reducers/
├── mfe-orders/                   # Orders Microfrontend
│   ├── package.json
│   ├── webpack.config.js
│   ├── tsconfig.json
│   └── src/
│       ├── main.ts
│       └── app/
│           ├── orders.module.ts
│           ├── components/
│           │   ├── cart/
│           │   ├── checkout/
│           │   ├── order-history/
│           │   └── order-tracking/
│           ├── services/
│           │   └── order.service.ts
│           └── store/
├── mfe-user/                     # User Management MFE
│   ├── package.json
│   ├── webpack.config.js
│   ├── tsconfig.json
│   └── src/
│       ├── main.ts
│       └── app/
│           ├── user.module.ts
│           ├── components/
│           │   ├── login/
│           │   ├── signup/
│           │   ├── profile/
│           │   └── settings/
│           ├── services/
│           │   └── user.service.ts
│           └── store/
├── mfe-admin/                    # Admin Dashboard MFE
│   ├── package.json
│   ├── webpack.config.js
│   ├── tsconfig.json
│   └── src/
│       ├── main.ts
│       └── app/
│           ├── admin.module.ts
│           ├── components/
│           │   ├── dashboard/
│           │   ├── inventory/
│           │   ├── users/
│           │   └── reports/
│           ├── services/
│           │   └── admin.service.ts
│           └── store/
└── shared-libs/                  # Shared Libraries
    ├── ui-kit/
    │   ├── package.json
    │   └── src/
    │       ├── components/
    │       ├── directives/
    │       └── pipes/
    ├── auth/
    │   ├── package.json
    │   └── src/
    │       ├── guards/
    │       ├── interceptors/
    │       └── services/
    └── services/
        ├── package.json
        └── src/
            ├── api/
            ├── utils/
            └── types/
```

---

## 🖥️ 2. Backend Repository (Node.js Microservices)

### Repository Structure
```
backend-repo/
├── README.md
├── package.json
├── .gitignore
├── .env.example
├── docker-compose.yml
├── nginx/
│   ├── nginx.conf
│   └── ssl/
├── user-service/                 # User Authentication & Management
│   ├── package.json
│   ├── Dockerfile
│   ├── tsconfig.json
│   ├── .env.example
│   └── src/
│       ├── index.ts
│       ├── models/
│       │   └── User.ts
│       ├── routes/
│       │   ├── auth.ts
│       │   └── users.ts
│       ├── middleware/
│       │   ├── auth.ts
│       │   ├── cors.ts
│       │   └── rateLimit.ts
│       ├── services/
│       │   └── user.service.ts
│       ├── graphql/
│       │   ├── schema.ts
│       │   └── resolvers.ts
│       ├── utils/
│       │   ├── logger.ts
│       │   └── validation.ts
│       └── types/
│           └── index.ts
├── product-service/              # Product & Inventory Management
│   ├── package.json
│   ├── Dockerfile
│   ├── tsconfig.json
│   ├── .env.example
│   └── src/
│       ├── index.ts
│       ├── models/
│       │   └── Product.ts
│       ├── routes/
│       │   ├── products.ts
│       │   └── categories.ts
│       ├── middleware/
│       │   ├── auth.ts
│       │   ├── upload.ts
│       │   └── validation.ts
│       ├── services/
│       │   └── product.service.ts
│       ├── graphql/
│       │   ├── schema.ts
│       │   └── resolvers.ts
│       ├── utils/
│       │   ├── imageProcessor.ts
│       │   └── csvParser.ts
│       └── types/
│           └── index.ts
├── order-service/                # Order & Cart Management
│   ├── package.json
│   ├── Dockerfile
│   ├── tsconfig.json
│   ├── .env.example
│   └── src/
│       ├── index.ts
│       ├── models/
│       │   ├── Order.ts
│       │   └── Cart.ts
│       ├── routes/
│       │   ├── orders.ts
│       │   └── cart.ts
│       ├── middleware/
│       │   ├── auth.ts
│       │   └── payment.ts
│       ├── services/
│       │   ├── order.service.ts
│       │   └── payment.service.ts
│       ├── graphql/
│       │   ├── schema.ts
│       │   └── resolvers.ts
│       ├── utils/
│       │   ├── socket.ts
│       │   └── notifications.ts
│       └── types/
│           └── index.ts
└── shared/                       # Shared Utilities
    ├── database/
    │   └── connection.ts
    ├── middleware/
    │   ├── cors.ts
    │   ├── rateLimit.ts
    │   └── errorHandler.ts
    ├── utils/
    │   ├── logger.ts
    │   ├── validation.ts
    │   └── encryption.ts
    └── types/
        └── index.ts
```

---

## 🤖 3. AI-Service Repository (LLM & AI Services)

### Repository Structure
```
ai-service-repo/
├── README.md
├── package.json
├── .gitignore
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── src/
│   ├── index.ts
│   ├── services/
│   │   ├── chatbot.service.ts
│   │   ├── recommendation.service.ts
│   │   ├── image.service.ts
│   │   └── prescription.service.ts
│   ├── routes/
│   │   ├── chat.ts
│   │   ├── recommendations.ts
│   │   ├── image.ts
│   │   └── prescription.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── upload.ts
│   │   └── rateLimit.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   ├── validation.ts
│   │   └── imageProcessor.ts
│   ├── models/
│   │   ├── chat.ts
│   │   └── prescription.ts
│   ├── config/
│   │   ├── ollama.ts
│   │   ├── tensorflow.ts
│   │   └── cloudinary.ts
│   └── types/
│       └── index.ts
├── models/                        # ML Models
│   ├── pill-recognition/
│   │   ├── model.json
│   │   ├── weights.bin
│   │   └── labels.json
│   ├── prescription-ocr/
│   │   ├── model.json
│   │   └── config.json
│   └── symptom-classifier/
│       ├── model.json
│       └── classes.json
├── tests/
│   ├── unit/
│   │   ├── chatbot.test.ts
│   │   ├── recommendation.test.ts
│   │   └── image.test.ts
│   ├── integration/
│   │   ├── api.test.ts
│   │   └── models.test.ts
│   └── e2e/
│       └── workflow.test.ts
├── docs/
│   ├── api.md
│   ├── models.md
│   └── deployment.md
└── scripts/
    ├── setup-ollama.sh
    ├── train-models.py
    └── deploy.sh
```

---

## 📱 4. Mobile Repository (React Native Mobile App)

### Repository Structure
```
mobile-repo/
├── README.md
├── package.json
├── app.json
├── babel.config.js
├── metro.config.js
├── tsconfig.json
├── .gitignore
├── .env.example
├── eas.json
├── src/
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── SignupScreen.tsx
│   │   │   └── ForgotPasswordScreen.tsx
│   │   ├── Home/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── CategoryScreen.tsx
│   │   │   └── SearchScreen.tsx
│   │   ├── Products/
│   │   │   ├── ProductListScreen.tsx
│   │   │   ├── ProductDetailScreen.tsx
│   │   │   └── ProductFilterScreen.tsx
│   │   ├── Cart/
│   │   │   ├── CartScreen.tsx
│   │   │   └── CheckoutScreen.tsx
│   │   ├── Orders/
│   │   │   ├── OrderHistoryScreen.tsx
│   │   │   ├── OrderDetailScreen.tsx
│   │   │   └── OrderTrackingScreen.tsx
│   │   ├── Profile/
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── EditProfileScreen.tsx
│   │   │   └── SettingsScreen.tsx
│   │   ├── Chat/
│   │   │   ├── ChatScreen.tsx
│   │   │   ├── ChatListScreen.tsx
│   │   │   └── ChatDetailScreen.tsx
│   │   └── Admin/
│   │       ├── AdminDashboardScreen.tsx
│   │       ├── InventoryScreen.tsx
│   │       └── ReportsScreen.tsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Loading.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Alert.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductFilter.tsx
│   │   │   └── ProductImage.tsx
│   │   ├── cart/
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── CartEmpty.tsx
│   │   ├── orders/
│   │   │   ├── OrderCard.tsx
│   │   │   ├── OrderStatus.tsx
│   │   │   └── OrderTimeline.tsx
│   │   ├── chat/
│   │   │   ├── ChatBubble.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── ChatHeader.tsx
│   │   └── navigation/
│   │       ├── TabBar.tsx
│   │       ├── DrawerContent.tsx
│   │       └── Header.tsx
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   ├── AdminNavigator.tsx
│   │   └── types.ts
│   ├── redux/
│   │   ├── store/
│   │   │   └── index.ts
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── productSlice.ts
│   │   │   ├── cartSlice.ts
│   │   │   ├── orderSlice.ts
│   │   │   └── chatSlice.ts
│   │   └── middleware/
│   │       └── api.ts
│   ├── services/
│   │   ├── api/
│   │   │   ├── auth.ts
│   │   │   ├── products.ts
│   │   │   ├── orders.ts
│   │   │   ├── chat.ts
│   │   │   └── config.ts
│   │   ├── storage/
│   │   │   └── secureStore.ts
│   │   └── utils/
│   │       ├── validation.ts
│   │       ├── formatters.ts
│   │       ├── permissions.ts
│   │       └── constants.ts
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── shadows.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useProducts.ts
│   │   ├── useCart.ts
│   │   ├── useChat.ts
│   │   └── usePermissions.ts
│   └── types/
│       ├── auth.ts
│       ├── product.ts
│       ├── order.ts
│       ├── chat.ts
│       └── navigation.ts
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── placeholder.png
│   │   └── icons/
│   ├── icons/
│   │   ├── home.svg
│   │   ├── cart.svg
│   │   ├── profile.svg
│   │   └── chat.svg
│   └── fonts/
│       ├── Inter-Regular.ttf
│       ├── Inter-Medium.ttf
│       ├── Inter-SemiBold.ttf
│       └── Inter-Bold.ttf
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── docs/
    ├── setup.md
    ├── deployment.md
    └── api.md
```

---

## 🔗 Repository Dependencies

### Frontend → Backend
- **API Calls**: REST endpoints for CRUD operations
- **WebSocket**: Real-time updates for orders and chat
- **Authentication**: JWT token management

### Frontend → AI-Service
- **Chatbot**: Real-time chat interface
- **Recommendations**: Product suggestions
- **Image Recognition**: Prescription upload

### Mobile → Backend
- **API Integration**: Same REST endpoints as web
- **Push Notifications**: Order updates and chat messages
- **Offline Support**: Local storage and sync

### Mobile → AI-Service
- **Chat Interface**: Mobile-optimized chat
- **Camera Integration**: Photo capture for prescriptions
- **Voice Input**: Speech-to-text for chat

---

## 🚀 Deployment Architecture

### Frontend Deployment
```
Frontend (Vercel/Netlify)
├── Shell App (Port 4200)
├── Products MFE (Port 4201)
├── Orders MFE (Port 4202)
├── User MFE (Port 4203)
└── Admin MFE (Port 4204)
```

### Backend Deployment
```
Backend (Railway/Render)
├── User Service (Port 3001)
├── Product Service (Port 3002)
├── Order Service (Port 3003)
└── Nginx Gateway (Port 80/443)
```

### AI-Service Deployment
```
AI-Service (Railway/Render)
├── Chatbot Service (Port 3004)
├── Recommendation Engine
├── Image Recognition
└── Ollama Integration
```

### Mobile Deployment
```
Mobile App Stores
├── iOS App Store
├── Google Play Store
└── Internal Testing
```

---

## 📊 Database Schema (MongoDB)

### Collections
```
pharmacy_db/
├── users/
├── products/
├── orders/
├── carts/
├── prescriptions/
├── chat_sessions/
└── analytics/
```

---

## 🔧 Development Workflow

### 1. Local Development
```bash
# Clone all repositories
git clone <frontend-repo>
git clone <backend-repo>
git clone <ai-service-repo>
git clone <mobile-repo>

# Install dependencies
cd frontend-repo && npm run install:all
cd ../backend-repo && npm run install:all
cd ../ai-service-repo && npm install
cd ../mobile-repo && npm install

# Start development servers
# Terminal 1: Frontend
cd frontend-repo && npm run dev

# Terminal 2: Backend
cd backend-repo && npm run dev

# Terminal 3: AI Service
cd ai-service-repo && npm run dev

# Terminal 4: Mobile
cd mobile-repo && npx expo start
```

### 2. Environment Setup
```bash
# Backend Environment
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
CLOUDINARY_URL=cloudinary://...

# AI Service Environment
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=mistral

# Frontend Environment
API_BASE_URL=http://localhost:3001
SOCKET_URL=ws://localhost:3003

# Mobile Environment
API_BASE_URL=https://api.pharmacy.com
SOCKET_URL=wss://api.pharmacy.com
```

---

## 📝 Next Steps

1. **Create GitHub Repositories**
   - Create 4 separate repositories
   - Set up branch protection rules
   - Configure GitHub Actions

2. **Set up CI/CD Pipelines**
   - Frontend: Vercel/Netlify deployment
   - Backend: Railway/Render deployment
   - AI-Service: Railway deployment
   - Mobile: EAS Build & Submit

3. **Database Setup**
   - MongoDB Atlas cluster
   - Database schemas
   - Indexes and optimization

4. **Development Environment**
   - Local development setup
   - Docker containers
   - Environment variables

5. **Testing Strategy**
   - Unit tests for all services
   - Integration tests
   - E2E tests for critical flows

---

## 📞 Support

For questions or issues:
- **Frontend**: Create issue in frontend-repo
- **Backend**: Create issue in backend-repo
- **AI-Service**: Create issue in ai-service-repo
- **Mobile**: Create issue in mobile-repo

---

*This structure provides a scalable, maintainable architecture for the Pharmacy E-Commerce Platform with clear separation of concerns and independent deployment capabilities.* 