import mongoose from 'mongoose';

const PrescriptionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  imageUrl: String,
  drugs: [String],
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export const Prescription = mongoose.model('Prescription', PrescriptionSchema); 