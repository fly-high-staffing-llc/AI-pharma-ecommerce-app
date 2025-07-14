# Pharmacy E-Commerce Platform – User Experience Flows & Figma Design Guide

This guide provides a comprehensive overview of user flows and Figma design structure for all major modules of the Pharmacy E-Commerce Platform. Use this as a reference for UX, UI, and Figma file organization.

---

## 📱 Figma Screens Overview

Below is a visual reference of the key Figma screens for each major module. (Replace with your actual Figma file link or embed as needed.)

![Figma UX Screens](./figma-screens-overview.png)

---

## 🌐 Web User Flow Overview

Below is the main web user flow for the Pharmacy E-Commerce Platform:

![Web User Flow](./design/web-flow-overview.png)

> To update or add new design assets, place them in the `/design` folder at the project root. Reference them in this guide for team-wide access.

---

## 📱 Mobile User Flow Overview

Below is the main mobile user flow for the Pharmacy E-Commerce Platform:

![Mobile User Flow](./design/mobile-flow-overview.png)

> To update or add new mobile design assets, place them in the `/design` folder at the project root. Reference them in this guide for team-wide access.

---

## 1. User Authentication & Profile

**User Flow:**
- Landing Page → Login / Signup Modal → Verify Credentials → Dashboard
    - Forgot Password → Email OTP → Reset Password
- Dashboard → Profile Page → Edit Profile → Save

**Figma Structure:**
- Page: Auth
- Frames: LoginScreen (Web + Mobile), SignupScreen, ForgotPassword, ProfileView, EditProfile
- Components: Input, PasswordToggle, AvatarUploader, RoleSelector
- UX Notes: Full-width cards, inline errors, active role badge

---

## 2. Product Listing & Search

**User Flow:**
- Dashboard → Product Home → Search + Filters → Product List → Product Detail
    - AI Suggestions

**Figma Structure:**
- Page: Products
- Frames: ProductList, ProductCard (grid/list), FilterSidebar, SearchBar, ProductDetail
- Components: Badge, StarRating, PriceLabel
- UX Notes: Filter chips, inline search, animated detail popup

---

## 3. Cart & Checkout

**User Flow:**
- ProductDetail → Add to Cart → Cart View → Update Quantity → Checkout Page
    - Remove / Empty Cart

**Figma Structure:**
- Page: Cart
- Frames: CartDrawer (Web), CartScreen (Mobile), CheckoutScreen
- Components: QuantityStepper, TotalSummaryCard, PaymentMethodSelect
- UX Notes: Persistent cart icon, add/remove animations, sticky checkout CTA

---

## 4. Order History & Tracking

**User Flow:**
- Dashboard → My Orders → Order List → Order Detail → Live Tracking
    - Invoice / Reorder

**Figma Structure:**
- Page: Orders
- Frames: OrderList, OrderCard, OrderDetail, LiveTrackingStepper
- Components: StepIndicator, ReorderButton, DateBadge
- UX Notes: Color-coded status, timeline animation

---

## 5. AI Chat Assistant

**User Flow:**
- Chat Icon / FAB → Chat List → Chat Window → Ask Question → LLM Reply
    - Voice / Upload

**Figma Structure:**
- Page: Chatbot
- Frames: ChatScreen, ChatList, ChatBubbleUser, ChatBubbleAI, VoiceInputButton
- Components: AudioRecorder, ImageUploader, SuggestionChips
- UX Notes: Typing indicator, scroll to last message, sticky input box

---

## 6. AI Recommendation Engine

**User Flow:**
- Search Input / Symptom Selection → AI Engine Query → Suggested Product List
    - Inline AI Cards in Grid

**Figma Structure:**
- Page: Recommendations
- Frames: SuggestionRow, AIProductCard
- UX Notes: "Recommended by AI" tag, glow animation, link to reason

---

## 7. Pill Recognition (Image Upload)

**User Flow:**
- Upload Pill Image → Image Preview → Run Prediction → Detected Drug Info

**Figma Structure:**
- Page: PillScanner
- Frames: ImageUploadScreen, ResultDisplayCard
- Components: UploadZone, PredictionChip
- UX Notes: Loader during processing, retake option

---

## 8. Prescription Upload & OCR

**User Flow:**
- Camera / Upload Button → Prescription Image → OCR Run → Parsed Drug Names → Save to Profile

**Figma Structure:**
- Page: PrescriptionOCR
- Frames: UploadScreen, OCRResultScreen
- Components: DocumentScannerIcon, DrugListParser
- UX Notes: Highlight extracted text, scrollable drug list

---

## 9. Admin Dashboard

**User Flow:**
- Admin Login → Dashboard Overview → Upload Inventory CSV → Manage Users → Reports

**Figma Structure:**
- Page: Admin
- Frames: DashboardOverview, CSVUploadModal, UserRoleTable, ReportsScreen
- Components: FileUploader, StatusTable, MetricCards
- UX Notes: Tabs for Inventory/Users/Reports, CSV preview

---

## 10. Reports & Analytics

**User Flow:**
- Admin / Pharmacist → Reports Tab → Filter by Date / Category → Download or View

**Figma Structure:**
- Page: Reports
- Frames: SalesLineChart, TopProductsBarGraph, DownloadCSV
- Components: GraphContainer, FilterBar, ExportButton
- UX Notes: Date picker, animated chart transitions

---

## 11. RBAC & Permissions

**User Flow:**
- Login → JWT Decoded → Role = Customer → Access: Products, Cart, Orders
    - Role = Pharmacist → Access: Orders, Chat
    - Role = Admin → Access: All Dashboards

**Figma Structure:**
- Shared Layout: NavBar with role-based menu, RouteGuard logic

---

## 📦 Figma File Structure Recommendation

```
Pharmacy-Ecom-Figma/
├── Pages/
│   ├── 1. Auth
│   ├── 2. Products
│   ├── 3. Cart
│   ├── 4. Orders
│   ├── 5. Chatbot
│   ├── 6. AI Recommendations
│   ├── 7. Pill Recognition
│   ├── 8. Prescription Upload
│   ├── 9. Admin Panel
│   ├── 10. Reports
│   └── 11. Onboarding & Splash (Mobile)
├── Components/
│   ├── Buttons, Cards, Forms
│   ├── Input Fields, Steppers, Charts
│   ├── Role-Based Wrappers
├── Typography/
│   ├── Inter Font (Regular, Medium, Bold)
├── Colors/
│   ├── Primary: #0E3A60
│   ├── Secondary: #2F80ED
│   ├── Success/Error/Warning variants
```

---

> For the actual Figma screens, export your Figma artboards as images and save them in the project (e.g., `figma-screens-overview.png`).
> Link or embed your live Figma file for team access. 