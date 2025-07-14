# 💎 Technical Standards & Best Practices Guide

Pharmacy E-Commerce Platform
Version 1.0 · Updated July 2025

---

## ⚙️ 1. Architecture & Code Modularity Standards

### ✅ Microfrontend & Microservice Principles
- Loose coupling between all MFEs and services
- Single-responsibility per MFE or service (e.g., Products, Orders, User, Admin, AI)
- Federated Deployment – each microfrontend independently deployable

### ✅ Module Standards (Frontend, Backend, Mobile)
- Use barrel files (index.ts) for internal module exports
- Group logic by feature (not type) within MFEs and services
- e.g., product/ contains components/, services/, store/
- Separate presentation (components/) from business logic (services/, store/)
- Avoid shared mutable state across modules; use shared services or Redux/Ngrx selectors

---

## 🔐 2. Role-Based Access Control (RBAC)

### 🧑‍💼 Roles
- Customer
- Pharmacist
- Admin

### 🔐 Access Flow
- All frontend and mobile components use route guards (Angular) or conditional navigators (React Native)
- Backend and AI services validate JWTs on every request
- RBAC enforced via middleware:
- canAccess(role: RoleEnum[]) → dynamically checks user roles against endpoint

### 🔒 Security Measures
- JWT with short-lived access token + refresh token
- Store tokens securely: HttpOnly Cookie (Web), SecureStore (Mobile)
- Rate Limiting + CORS Whitelisting per service
- Helmet & express-mongo-sanitize in backend
- Audit Logs for login, signup, order, and admin actions

---

## 🧱 3. Code Quality & Clean Code Standards

### 🔧 General Practices
- 100% TypeScript across all repositories
- Strict tsconfig.json with:
  - "strict": true,
  - "noImplicitAny": true,
  - "noUnusedLocals": true
- Use eslint, prettier, and husky pre-commit hooks
- CI Lint & Type Checks in GitHub Actions

### 📦 Frontend (Angular)
- Prefer NgRx for global state (avoid BehaviorSubject unless localized)
- Use OnPush change detection
- Enforce lazy-loaded routes per feature
- Use SCSS variables for consistent theming (colors, spacing, shadows)
- Reusable shared-libs/ for UI, Auth, and HTTP

### 📱 Mobile (React Native)
- Redux Toolkit + Type-safe slices
- FlatList and SectionList for performance in large data sets
- Modular navigators: AuthNavigator, MainNavigator, AdminNavigator
- Reuse mobile-specific components from components/common/
- Follow atomic design structure

### 🌐 Backend (Node.js + GraphQL)
- Separate routes/, middleware/, services/, models/, types/
- Use Apollo Federation to unify services under a single GraphQL gateway
- Enforce input validation with Zod/Joi
- Centralized error handler middleware
- Use winston or pino for structured logging
- Integrate GraphQL with REST via BFF Middleware

### 🤖 AI Services
- Use TensorFlow.js for in-browser models, Transformers.js or Ollama for LLMs
- Isolate each AI capability: Chat → chatbot.service.ts, Image → image.service.ts
- Async-safe: Always return meaningful fallbacks on LLM or model timeout
- Perform GPU-aware checks during inference

---

## 🧪 4. Testing & Code Coverage

### Testing Types
- Unit Tests → Services, Components, Resolvers
- Integration Tests → API interactions, DB communication
- E2E Tests → Full user journey

### Tools
- Frontend: Jest, Karma, Cypress
- Backend/AI: Jest, Supertest
- Mobile: Jest, React Native Testing Library, Detox (optional)

### Minimum Coverage
- 80%+ Unit Test coverage per module
- CI pipelines will fail below threshold

---

## 📁 5. Folder Structure & Naming Conventions
- camelCase for filenames and variables
- PascalCase for React Native components / Angular components
- Group all screen/component logic as:

ProductList/
  ├── ProductListScreen.tsx
  ├── ProductCard.tsx
  └── ProductList.styles.ts

---

## 🔄 6. CI/CD & Deployment Standards
- Each repo has its own GitHub Actions CI pipeline:
  - Run: lint → typecheck → test → build
- Auto-deploy on merge to main or release/* branches
- Versioning: Semantic (1.0.0, 1.1.0, etc.)
- Tagged releases via CI

### Tools
- Frontend: Vercel / Netlify
- Backend & AI: Railway / Render
- Mobile: EAS (Expo Application Services)

---

## 🧰 7. Tooling & Utilities

| Category      | Tool/Library           | Notes                        |
|--------------|------------------------|------------------------------|
| Linting      | ESLint + Prettier      | All repos                    |
| Pre-commit   | Husky + Lint-staged    | Run lint/tests               |
| Secrets      | dotenv + vault         | Local .env, prod via CI      |
| Auth         | JWT + Passport         | Custom strategy + refresh    |
| Logging      | Winston or Pino        | Backend, AI logs             |
| API Docs     | Swagger + GraphQL Docs | /docs folder                 |
| Error Track  | Sentry (Free Tier)     | Client + Server              |
| Monitoring   | Prometheus + Grafana   | Optional self-hosted stack   |

---

## 🔍 8. Performance & Optimization

### Web
- Enable tree-shaking in Angular builds
- Use lazy loading for routes and assets
- Compress assets (gzip + brotli)
- Enable SSR (optional upgrade)

### Mobile
- Use memoization (useMemo, React.memo, useCallback)
- Split large lists into virtualized lists
- Use dynamic imports for low-priority components

### Backend
- Add indexes for frequent queries
- Use caching (e.g., Redis) for frequently accessed queries
- Batch GraphQL resolvers using DataLoader

---

## 🔐 9. Security & Compliance
- HTTPS via SSL (Nginx config included)
- All requests validated on backend using middleware
- Validate file uploads (e.g., prescriptions) for type & size
- Sanitize inputs using express-validator / zod
- Compliant with HIPAA for medical data handling
- Regular npm audit + dependency updates

---

## 📦 10. Packaging & Releases
- Each MFE versioned and deployed independently
- Tagged versions (e.g., products@1.0.3) for rollback
- Shared libraries under shared-libs/ are reused via Nx or local paths
- Mobile versioning tied to app stores (expo publish + build numbers)

---

## 📘 Developer Notes
- Follow Git flow branching model:

main ← release/* ← develop ← feature/*

- Use README.md in every MFE and service
- Document GraphQL schema with comments for every query/mutation
- Markdown-based developer docs in /docs directory
- Maintain Postman collections in docs/api.postman_collection.json 