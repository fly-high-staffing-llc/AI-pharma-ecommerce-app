import { Router } from 'express';
const router = Router();

router.post('/chat', async (req, res) => {
  // Placeholder: integrate with LLM service
  const { userId, message } = req.body;
  res.json({ response: `Echo: ${message}`, timestamp: new Date().toISOString() });
});

export default router; 