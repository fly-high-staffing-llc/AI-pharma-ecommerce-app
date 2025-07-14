# 💊 Pharmacy E-Commerce Frontend

Angular 17 Microfrontend Architecture for Pharmacy E-Commerce Platform

## 🏗️ Architecture

- **Framework**: Angular 17
- **Architecture**: Module Federation (Webpack 5)
- **UI Library**: Angular Material + SCSS
- **State Management**: NgRx
- **Styling**: SCSS with Design System

## 📦 Project Structure

```
frontend/
├── shell-app/                 # Host Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   └── app.component.ts
│   │   ├── styles/
│   │   │   ├── theme.scss
│   │   │   └── global.scss
│   │   └── main.ts
│   ├── webpack.config.js
│   └── package.json
├── mfe-products/             # Products Microfrontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── products.module.ts
│   │   └── main.ts
│   ├── webpack.config.js
│   └── package.json
├── mfe-orders/              # Orders Microfrontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── orders.module.ts
│   │   └── main.ts
│   ├── webpack.config.js
│   └── package.json
├── mfe-user/                # User Management MFE
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── user.module.ts
│   │   └── main.ts
│   ├── webpack.config.js
│   └── package.json
├── mfe-admin/               # Admin Dashboard MFE
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── admin.module.ts
│   │   └── main.ts
│   ├── webpack.config.js
│   └── package.json
├── shared-libs/             # Shared Libraries
│   ├── ui-kit/
│   ├── auth/
│   └── services/
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Angular CLI 17

### Installation

1. **Clone Repository**
```bash
git clone <frontend-repo-url>
cd frontend
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

4. **Build for Production**
```bash
npm run build
```

## 🎨 Design System

### Color Palette
- Primary: `#2A9D8F`
- Secondary: `#264653`
- Background: `#F1FAEE`
- Text: `#1D3557`
- Accent: `#E76F51`

### Typography
- Font Family: Inter, sans-serif
- Weights: 300, 400, 500, 600, 700

## 📱 Features

### Customer Features
- Product browsing and search
- AI-powered recommendations
- Shopping cart and checkout
- Order tracking
- Chat with AI assistant

### Pharmacist Features
- Order management
- Prescription verification
- Customer chat support

### Admin Features
- User management
- Inventory management
- Sales reports
- CSV upload

## 🔧 Development

### Module Federation Setup
Each microfrontend has its own webpack configuration for Module Federation:

```javascript
// webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsModule': './src/app/products.module.ts'
      },
      shared: {
        '@angular/core': { singleton: true },
        '@angular/common': { singleton: true },
        '@angular/router': { singleton: true }
      }
    })
  ]
};
```

### State Management
Using NgRx for state management across microfrontends:

```typescript
// store/
├── actions/
├── effects/
├── reducers/
└── selectors/
```

## 🧪 Testing

- **Unit Tests**: Jasmine + Karma
- **E2E Tests**: Cypress
- **Component Tests**: Angular Testing Utilities

## 📦 Build & Deployment

### Build Commands
```bash
# Build all microfrontends
npm run build

# Build individual MFE
cd mfe-products && npm run build
```

### Deployment
- **Hosting**: Vercel / Netlify
- **CDN**: Cloudflare
- **CI/CD**: GitHub Actions

## 📝 License

MIT License - see LICENSE file for details 