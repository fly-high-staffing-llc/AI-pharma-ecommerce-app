# Pharmacy E-Commerce Platform – Mobile

## 🚀 Quick Start

Clone the repository using HTTPS (recommended for most users):

```sh
git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
```

Or use SSH (for advanced users with SSH keys):

```sh
git clone git@github.com:fly-high-staffing-llc/AI-pharma-ecommerce-app.git
```

Both methods are secure and supported. Use HTTPS if you are unsure.

## 🚀 Prerequisites & Setup

**All developers must follow the [SETUP_GUIDE.md](./SETUP_GUIDE.md) before starting development.**

This guide covers all required tools, installation steps, and troubleshooting for Mac and Windows.

---

React Native mobile application for Pharmacy E-Commerce Platform

## 🏗️ Architecture

- **Framework**: React Native 0.72.6
- **Development**: Expo SDK 49
- **UI Library**: NativeBase + React Native Paper
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation 6
- **Storage**: Expo SecureStore

## 📦 Project Structure

```
mobile/
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
│   │   │   └── Loading.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductList.tsx
│   │   │   └── ProductFilter.tsx
│   │   ├── cart/
│   │   │   ├── CartItem.tsx
│   │   │   └── CartSummary.tsx
│   │   ├── orders/
│   │   │   ├── OrderCard.tsx
│   │   │   └── OrderStatus.tsx
│   │   └── chat/
│   │       ├── ChatBubble.tsx
│   │       └── ChatInput.tsx
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   └── AdminNavigator.tsx
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
│   │   │   └── chat.ts
│   │   ├── storage/
│   │   │   └── secureStore.ts
│   │   └── utils/
│   │       ├── validation.ts
│   │       ├── formatters.ts
│   │       └── permissions.ts
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useProducts.ts
│   │   ├── useCart.ts
│   │   └── useChat.ts
│   └── types/
│       ├── auth.ts
│       ├── product.ts
│       ├── order.ts
│       └── chat.ts
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── app.json
├── babel.config.js
├── metro.config.js
├── package.json
└── README.md
```

## 📱 Features

### Customer Features
- **Authentication**: Login, Signup, Password Reset
- **Product Browsing**: Categories, Search, Filters
- **Shopping Cart**: Add/Remove items, Quantity management
- **Checkout**: Address, Payment, Order confirmation
- **Order Tracking**: Real-time status updates
- **AI Chat**: Pharmacy assistant integration
- **Profile Management**: Personal info, Preferences

### Pharmacist Features
- **Order Management**: View pending orders
- **Prescription Verification**: Image upload and verification
- **Customer Chat**: Real-time support
- **Inventory Updates**: Stock management

### Admin Features
- **Dashboard**: Analytics and overview
- **User Management**: Customer and pharmacist accounts
- **Inventory Management**: Product catalog
- **Reports**: Sales and performance metrics

## 🎨 Design System

### Color Palette
```typescript
// theme/colors.ts
export const colors = {
  primary: '#2A9D8F',
  secondary: '#264653',
  accent: '#E76F51',
  background: '#F1FAEE',
  text: '#1D3557',
  success: '#28A745',
  warning: '#FFC107',
  danger: '#DC3545',
  info: '#17A2B8',
  light: '#F8F9FA',
  dark: '#343A40'
};
```

### Typography
```typescript
// theme/typography.ts
export const typography = {
  fontFamily: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semibold: 'Inter-SemiBold',
    bold: 'Inter-Bold'
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36
  }
};
```

## 🔧 Development

### State Management
Using Redux Toolkit for global state:

```typescript
// redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});
```

### API Integration
```typescript
// services/api/auth.ts
import axios from 'axios';
import { API_BASE_URL } from '../config';

const authAPI = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  timeout: 10000
});

export const login = async (email: string, password: string) => {
  const response = await authAPI.post('/login', { email, password });
  return response.data;
};

export const signup = async (userData: SignupData) => {
  const response = await authAPI.post('/signup', userData);
  return response.data;
};
```

### Navigation
```typescript
// navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

### Component Tests
```bash
npm run test:components
```

## 📦 Build & Deployment

### Development Build
```bash
npx expo start --dev-client
```

### Production Build
```bash
# iOS
eas build --platform ios

# Android
eas build --platform android
```

### App Store Deployment
```bash
# iOS App Store
eas submit --platform ios

# Google Play Store
eas submit --platform android
```

## 🔧 Configuration

### Environment Variables
```bash
# API Configuration
API_BASE_URL=https://api.pharmacy.com
SOCKET_URL=wss://api.pharmacy.com

# External Services
CLOUDINARY_URL=cloudinary://...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# App Configuration
APP_NAME=Pharmacy E-Commerce
APP_VERSION=1.0.0
```

### EAS Configuration
```json
// eas.json
{
  "cli": {
    "version": ">= 5.9.1"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

## 📊 Performance

### Optimization Techniques
- **Image Optimization**: Lazy loading, caching
- **Bundle Splitting**: Code splitting for better performance
- **Memory Management**: Proper cleanup in components
- **Network Optimization**: Request caching, offline support

### Monitoring
- **Crash Reporting**: Sentry integration
- **Analytics**: Firebase Analytics
- **Performance**: React Native Performance Monitor

## 🔒 Security

- **Secure Storage**: Expo SecureStore for sensitive data
- **Network Security**: HTTPS only, certificate pinning
- **Input Validation**: Client-side validation
- **Authentication**: JWT token management

## 📝 License

MIT License - see LICENSE file for details 