import express from 'express';
import { FRONTEND_URL, PORT } from './config/dotenv.js';
import connectDb from './config/db.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import authenticate from './middlewares/auth.middleware.js';
import diaryRoutes from './routes/diary.route.js';
import blogsRoutes from './routes/blogs.route.js';
import cors from 'cors';

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use((cors({
    origin: FRONTEND_URL,
    credentials: true
})));

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/diary',authenticate, diaryRoutes);
app.use('/api/blogs',authenticate, blogsRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    connectDb();
});