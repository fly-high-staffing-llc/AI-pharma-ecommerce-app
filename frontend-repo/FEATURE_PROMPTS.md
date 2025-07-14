# Pharmacy E-Commerce Platform – Frontend Feature Prompts

## User MFE

**User Story:**
_As a user, I want to securely log in, sign up, view, and update my profile and settings, so I can manage my account._

- Build Angular 17 components (Angular Material, SCSS): Login, Signup, Profile, Settings
- Implement AuthGuard for protected routes
- Store JWT in HttpOnly cookie
- User form fields: name, email, password, role (customer/pharmacist/admin), phone, address
- Use NgRx for state management (actions, reducers, effects)
- Connect to `/api/user/login` and `/api/user/profile`

---

## Product MFE

**User Story:**
_As a customer, I want to browse, search, and filter products, so I can find and purchase what I need easily._

- Angular 17 components: ProductList, ProductDetail, ProductFilter, ProductSearch
- Product model: `_id, name, brand, price, type (Prescription/OTC/Drink/Food), symptoms[], image, description`
- Filters: category, symptoms, brand, price range
- Integrate with GraphQL product service (Apollo Angular)
- Pagination and lazy-loading
- AI-powered suggestions UI (`/api/ai/recommendations`)

---

## Orders MFE

**User Story:**
_As a user, I want to manage my cart, checkout, and track my orders in real time._

- Components: Cart, Checkout, OrderHistory, OrderTracking
- Cart: `productId, quantity, subtotal`
- Order: `orderId, status, products[], totalAmount, paymentMethod, createdAt`
- Use ngx-socket-io for real-time updates
- Connect to backend GraphQL `/orders` and REST `/cart`

---

## Admin MFE

**User Story:**
_As an admin, I want to manage inventory, users, and view reports to oversee the platform._

- Admin dashboard: Inventory upload (CSV), Manage Users (roles), Reports
- Angular Material Table with filters, download options
- Inventory upload: parse CSV, preview, POST to `/api/product/bulk`
- User management: view list, assign roles, block/unblock 