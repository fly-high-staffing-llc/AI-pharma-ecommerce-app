import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: Date
});

const ChatSessionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  messages: [MessageSchema]
});

export const ChatSession = mongoose.model('ChatSession', ChatSessionSchema); 