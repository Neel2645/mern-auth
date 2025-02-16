import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'
import env from 'dotenv'

env.config();
const app = express();
const PORT = 3000

mongoose.connect(process.env.MONGO)
.then(() => {console.log("Connected to MongoDB");})
.catch((err) => {console.log("Error:",err);})

app.use(express.json());

app.use('/api/user' , userRoutes)
app.use('/api/auth' , authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        message,
        statusCode,
    })
})

app.listen(PORT, () => {
    console.log(`Server is Running On Port: ${PORT}`);
})