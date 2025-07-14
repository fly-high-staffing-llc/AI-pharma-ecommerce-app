import { Router } from 'express';
const router = Router();

router.get('/recommendations', async (req, res) => {
  // Placeholder: integrate with recommendation engine
  const { symptom, userId } = req.query;
  res.json({ products: [{ name: 'Paracetamol', symptom, userId }] });
});

export default router; 