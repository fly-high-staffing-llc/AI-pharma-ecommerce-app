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

# 🤖 Pharmacy AI Service

AI-powered service for chatbot, recommendations, and image recognition for Pharmacy E-Commerce Platform

## 🏗️ Architecture

- **Framework**: Node.js + Express.js
- **LLM**: Mistral 7B (via Ollama)
- **Image Recognition**: TensorFlow.js
- **Real-time**: Socket.IO
- **Storage**: Cloudinary

## 📦 Project Structure

```
ai-service/
├── src/
│   ├── services/
│   │   ├── chatbot.service.ts      # LLM Chatbot Service
│   │   ├── recommendation.service.ts # Product Recommendations
│   │   ├── image.service.ts        # Image Recognition
│   │   └── prescription.service.ts # Prescription Analysis
│   ├── routes/
│   │   ├── chat.ts                 # Chatbot Routes
│   │   ├── recommendations.ts      # Recommendation Routes
│   │   ├── image.ts               # Image Upload Routes
│   │   └── prescription.ts        # Prescription Routes
│   ├── middleware/
│   │   ├── auth.ts                # Authentication
│   │   ├── upload.ts              # File Upload
│   │   └── rateLimit.ts           # Rate Limiting
│   ├── utils/
│   │   ├── logger.ts              # Logging
│   │   ├── validation.ts          # Input Validation
│   │   └── imageProcessor.ts      # Image Processing
│   ├── models/
│   │   ├── chat.ts                # Chat Models
│   │   └── prescription.ts        # Prescription Models
│   ├── config/
│   │   ├── ollama.ts              # Ollama Configuration
│   │   ├── tensorflow.ts          # TensorFlow Configuration
│   │   └── cloudinary.ts          # Cloudinary Configuration
│   └── index.ts                   # Main Entry Point
├── models/                        # ML Models
│   ├── pill-recognition/          # Pill Recognition Model
│   ├── prescription-ocr/          # Prescription OCR Model
│   └── symptom-classifier/        # Symptom Classification
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── api.md                     # API Documentation
│   ├── models.md                  # Model Documentation
│   └── deployment.md              # Deployment Guide
├── package.json
├── Dockerfile
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Ollama (for local LLM)
- Docker (optional)

### Installation

1. **Clone Repository**
```bash
git clone <ai-service-repo-url>
cd ai-service
```

2. **Install Dependencies**
```bash
npm install
```

3. **Setup Ollama (Local LLM)**
```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Download Mistral model
ollama pull mistral

# Start Ollama service
ollama serve
```

4. **Environment Setup**
```bash
cp .env.example .env
# Configure your environment variables
```

5. **Start Development**
```bash
npm run dev
```

## 🔧 Services

### Chatbot Service
AI-powered pharmacy assistant for customer queries.

**Features:**
- Symptom-based recommendations
- Medication information
- Drug interactions
- General health advice
- Order tracking assistance

**Endpoints:**
- `POST /api/chat` - Send message to chatbot
- `POST /api/chat/stream` - Stream chat responses
- `GET /api/chat/history` - Get chat history

### Recommendation Service
AI-powered product recommendations based on user behavior and symptoms.

**Features:**
- Symptom-based recommendations
- Purchase history analysis
- Collaborative filtering
- Content-based filtering

**Endpoints:**
- `POST /api/recommendations/symptoms` - Get recommendations by symptoms
- `POST /api/recommendations/user` - Get personalized recommendations
- `GET /api/recommendations/popular` - Get popular products

### Image Recognition Service
Pill and prescription image analysis.

**Features:**
- Pill identification
- Prescription OCR
- Image preprocessing
- Confidence scoring

**Endpoints:**
- `