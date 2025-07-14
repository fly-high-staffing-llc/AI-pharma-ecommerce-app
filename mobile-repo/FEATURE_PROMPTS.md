# Pharmacy E-Commerce Platform – Mobile Feature Prompts

## Auth Screens

**User Story:**
_As a user, I want to sign up, log in, and recover my password securely on mobile._

- Login, Signup, ForgotPassword screens (React Native + Redux Toolkit)
- Fields: name, email, password, role
- Use SecureStore for token storage
- Validate input with Zod or Yup

---

## Home & Search Screens

**User Story:**
_As a user, I want to browse categories and search for products easily._

- Home, Category, Search screens
- Fetch products from GraphQL API
- Category cards: OTC, Prescriptions, Drinks, Foods
- Search bar with debounce and typeahead
- Display results using ProductCard

---

## Product Screens

**User Story:**
_As a user, I want to view product details, filter products, and get AI suggestions._

- ProductListScreen: grid of filtered products
- ProductDetailScreen: add to cart, show AI-suggested alternatives
- ProductFilterScreen: filter by symptoms, brand, price

---

## Cart & Checkout

**User Story:**
_As a user, I want to manage my cart and checkout smoothly._

- CartScreen: show items from Redux cart slice, update quantity, remove item
- CheckoutScreen: place order via GraphQL mutation, show confirmation, redirect to OrderHistory

---

## Order & Tracking

**User Story:**
_As a user, I want to view my order history and track orders in real time._

- OrderHistoryScreen: fetch past orders, filter by status
- OrderTrackingScreen: real-time updates via WebSocket

---

## Profile & Settings

**User Story:**
_As a user, I want to view and update my profile, and manage app settings._

- ProfileScreen: show name, email, address
- EditProfileScreen: update profile via `/user/update`
- SettingsScreen: notification toggles, logout, dark mode

---

## Chat Assistant

**User Story:**
_As a user, I want to chat with an AI assistant for support and medical queries._

- ChatListScreen: show past chat sessions
- ChatScreen: real-time chat with AI assistant, send message to `/api/ai/chat`
- (Optional) Support image or voice input 