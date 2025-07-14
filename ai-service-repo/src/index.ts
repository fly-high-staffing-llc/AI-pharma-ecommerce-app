import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, { cors: { origin: '*' } });

app.use(cors());
app.use(helmet());
app.use(express.json());

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// TODO: Import and use routes (chat, recommendations, image, prescription)

const PORT = process.env.PORT || 3004;
httpServer.listen(PORT, () => {
  console.log(`AI Service running on port ${PORT}`);
}); 