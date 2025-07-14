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
- `POST /api/image/pill` - Identify pill from image
- `POST /api/image/prescription` - Extract prescription data
- `POST /api/image/upload` - Upload and process image

### Prescription Service
Prescription analysis and verification.

**Features:**
- Prescription validation
- Medication extraction
- Dosage analysis
- Drug interaction checking

**Endpoints:**
- `POST /api/prescription/analyze` - Analyze prescription
- `POST /api/prescription/verify` - Verify prescription
- `GET /api/prescription/history` - Get prescription history

## 🤖 AI Models

### Mistral 7B (Chatbot)
- **Model**: Mistral 7B Instruct
- **Provider**: Ollama (Local)
- **Use Case**: General conversation, health advice
- **Context**: Pharmacy-specific prompts

### Pill Recognition Model
- **Framework**: TensorFlow.js
- **Dataset**: Custom pill images
- **Accuracy**: ~85%
- **Use Case**: Pill identification from photos

### Prescription OCR Model
- **Framework**: Tesseract.js
- **Features**: Text extraction, layout analysis
- **Use Case**: Prescription data extraction

### Symptom Classifier
- **Framework**: TensorFlow.js
- **Algorithm**: CNN
- **Classes**: Common symptoms
- **Use Case**: Symptom-based recommendations

## 📊 API Examples

### Chatbot Interaction
```javascript
// Send message to chatbot
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'I have a headache and fever',
    userId: 'user123',
    context: 'customer'
  })
});

// Response
{
  "reply": "Based on your symptoms, I recommend:",
  "suggestions": [
    "Paracetamol 500mg",
    "Ibuprofen 400mg",
    "Rest and hydration"
  ],
  "confidence": 0.92
}
```

### Product Recommendations
```javascript
// Get recommendations by symptoms
const response = await fetch('/api/recommendations/symptoms', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    symptoms: ['headache', 'fever'],
    category: 'OTC'
  })
});

// Response
{
  "products": [
    {
      "id": "prod123",
      "name": "Paracetamol 500mg",
      "confidence": 0.95,
      "reason": "Effective for headache and fever"
    }
  ]
}
```

### Image Recognition
```javascript
// Identify pill from image
const formData = new FormData();
formData.append('image', imageFile);

const response = await fetch('/api/image/pill', {
  method: 'POST',
  body: formData
});

// Response
{
  "medication": "Paracetamol 500mg",
  "confidence": 0.87,
  "description": "Pain reliever and fever reducer",
  "dosage": "1-2 tablets every 4-6 hours"
}
```

## 🔧 Configuration

### Ollama Configuration
```typescript
// config/ollama.ts
export const ollamaConfig = {
  url: process.env.OLLAMA_URL || 'http://localhost:11434',
  model: 'mistral',
  options: {
    temperature: 0.7,
    top_p: 0.9,
    max_tokens: 500
  }
};
```

### TensorFlow Configuration
```typescript
// config/tensorflow.ts
export const tensorflowConfig = {
  modelPath: './models/pill-recognition/model.json',
  imageSize: [224, 224],
  confidence: 0.8
};
```

## 🧪 Testing

### Unit Tests
```bash
npm run test:unit
```

### Integration Tests
```bash
npm run test:integration
```

### E2E Tests
```bash
npm run test:e2e
```

### Load Testing
```bash
npm run test:load
```

## 📦 Deployment

### Docker Deployment
```bash
# Build image
docker build -t pharmacy-ai-service .

# Run container
docker run -p 3004:3004 pharmacy-ai-service
```

### Environment Variables
```bash
# Ollama
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=mistral

# Cloudinary
CLOUDINARY_URL=cloudinary://...

# Service
PORT=3004
NODE_ENV=production

# Security
JWT_SECRET=your-secret-key
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

## 📊 Monitoring

- **Logging**: Winston
- **Metrics**: Prometheus
- **Health Checks**: `/health` endpoint
- **Model Performance**: Custom metrics

## 🔒 Security

- **Rate Limiting**: Express Rate Limit
- **Input Validation**: Joi
- **File Upload**: Multer with size limits
- **Authentication**: JWT middleware

## 📝 License

MIT License - see LICENSE file for details 