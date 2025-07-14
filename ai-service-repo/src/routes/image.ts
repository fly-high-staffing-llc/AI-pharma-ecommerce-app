import { Router } from 'express';
const router = Router();

router.post('/image/predict', async (req, res) => {
  // Placeholder: integrate with image recognition model
  res.json({ drugName: 'Paracetamol 500mg', description: 'Pain reliever and fever reducer' });
});

router.post('/prescription/ocr', async (req, res) => {
  // Placeholder: integrate with OCR model
  res.json({ drugs: ['Amoxicillin 250mg', 'Ibuprofen 400mg'] });
});

export default router; 