# Pharmacy E-Commerce Platform – AI Service Feature Prompts

## Chatbot Service

**User Story:**
_As a user, I want to chat with an AI assistant for medical queries and support._

- Express.js chatbot using OpenRouter API or Ollama local model
- Endpoint: `POST /chat` with `{ userId, message }`
- Response: `{ response, timestamp }`
- Save chat sessions in MongoDB `chat_sessions`
- Support basic medical symptom queries

---

## Recommendation Engine

**User Story:**
_As a user, I want to receive AI-powered product recommendations based on my symptoms and history._

- Service for AI product suggestions
- Endpoint: `GET /recommendations?symptom=cough`
- Use rules or ML to match symptoms with OTC products
- Personalize with `userId` (past purchases)

---

## Pill Image Recognition

**User Story:**
_As a user, I want to upload a pill photo and get its name and description using AI._

- Image upload API: multer + Cloudinary
- Endpoint: `POST /image/predict`
- Run image through TensorFlow model
- Return predicted drug name and description

---

## Prescription OCR

**User Story:**
_As a pharmacist, I want to extract drug names from prescription images for order processing._

- OCR API: Tesseract or pretrained model
- Input: prescription image; Output: parsed drug names
- Save in `prescriptions` collection for pharmacist review 