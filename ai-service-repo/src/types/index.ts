export interface ChatMessage {
  sender: string;
  text: string;
  timestamp: Date;
}

export interface ChatSession {
  userId: string;
  messages: ChatMessage[];
}

export interface Prescription {
  userId: string;
  imageUrl: string;
  drugs: string[];
  status: string;
  createdAt: Date;
} 