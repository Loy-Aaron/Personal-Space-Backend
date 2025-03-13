import dotenv from 'dotenv';

dotenv.config();

export const { PORT, MONGO_URI, JWT_SECRET, NODE_ENV, FRONTEND_URL } = process.env;