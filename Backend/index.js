import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'
import env from 'dotenv'
env.config();
const app = express();
const PORT = 3000

mongoose.connect(process.env.MONGO)
.then(() => {console.log("Connected to MongoDB");})
.catch((err) => {console.log("Error:",err);})

app.use('/api/user' , userRoutes)

app.listen(PORT, () => {
    console.log(`Server is Running On Port: ${PORT}`);
})