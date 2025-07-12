import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import cors from 'cors';



const app = express();
const allowwedOrigins=['http://localhost:5173','https://myportfolio-backend-peox.onrender.com/']

// Load environment variables
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({origin:allowwedOrigins,credentials:true}));

// Route
app.get("/",(req,res)=>{
    res.send("api is working ");
})

// API routes
app.use('/api', userRouter);

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
