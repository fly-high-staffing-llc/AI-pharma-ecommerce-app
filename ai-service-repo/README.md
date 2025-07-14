# Pharmacy E-Commerce Platform – AI Service

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

# 📚 AI Service Documentation

## 1. Required API Endpoints

| Endpoint                        | Method | Description                                 | Input Example                          | Output Example |
|----------------------------------|--------|---------------------------------------------|----------------------------------------|----------------|
| `/api/ai/chat`                  | POST   | Chatbot interaction (LLM)                   | `{ userId, message }`                  | `{ response, timestamp }` |
| `/api/ai/recommendations`       | GET    | Product recommendations by symptom          | `?symptom=cough&userId=123`            | `{ products: [...] }` |
| `/api/ai/image/predict`         | POST   | Pill image recognition                      | `multipart/form-data` (image upload)   | `{ drugName, description }` |
| `/api/ai/prescription/ocr`      | POST   | Prescription OCR (extract drug names)       | `multipart/form-data` (image upload)   | `{ drugs: [...] }` |
| `/api/ai/chat-sessions`         | GET    | Get chat history for a user                 | `?userId=123`                          | `{ sessions: [...] }` |

---

## 2. Recommended Code File Structure

```
ai-service-repo/
├── src/
│   ├── config/           # Configuration files (API keys, model paths)
│   ├── middleware/       # Express middlewares (auth, rate limit, logger)
│   ├── models/           # Mongoose models (ChatSession, Prescription, etc.)
│   ├── routes/           # Express route handlers for each endpoint
│   ├── services/         # Business logic (chatbot, recommendations, OCR, image)
│   ├── types/            # TypeScript types/interfaces
│   ├── utils/            # Utility functions (file upload, validation)
│   └── index.ts          # App entry point
├── tests/                # Unit, integration, and e2e tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── package.json
├── README.md
└── ...
```

---

## 3. Database Structure (MongoDB Collections)

| Collection         | Fields                                                                 |
|--------------------|-----------------------------------------------------------------------|
| `chat_sessions`    | `_id, userId, messages: [{ sender, text, timestamp }]`                |
| `prescriptions`    | `_id, userId, imageUrl, drugs: [String], status, createdAt`           |
| `analytics`        | `pageViews, conversions, topProducts, userEvents`                     |

**Relationships:**
- users → chat_sessions: 1-to-many
- users → prescriptions: 1-to-many

---

## 4. Example: Chatbot Endpoint

**POST `/api/ai/chat`**
- **Input:**
  ```json
  {
    "userId": "user123",
    "message": "What can I take for a headache?"
  }
  ```
- **Output:**
  ```json
  {
    "response": "Based on your symptoms, you may consider Paracetamol. Please consult a pharmacist.",
    "timestamp": "2024-06-01T12:34:56Z"
  }
  ```

---

## 5. Example: Pill Image Recognition Endpoint

**POST `/api/ai/image/predict`**
- **Input:**
  - `multipart/form-data` with an image file
- **Output:**
  ```json
  {
    "drugName": "Paracetamol 500mg",
    "description": "Pain reliever and fever reducer"
  }
  ```

---

## 6. Example: Prescription OCR Endpoint

**POST `/api/ai/prescription/ocr`**
- **Input:**
  - `multipart/form-data` with a prescription image
- **Output:**
  ```json
  {
    "drugs": ["Amoxicillin 250mg", "Ibuprofen 400mg"]
  }
  ```

---

## 7. Useful Links
- [Project Repository](https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app)
- [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- [Technical Standards](./TECHNICAL_STANDARDS.md)