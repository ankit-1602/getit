import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import {errorHandler,notFound} from './middleware/errorMiddleware.js';
dotenv.config();
connectDB();

const app =express();

//Body Parser
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        message:'This is the home page.'
    })
})

//Routes
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes)

//Error handling middleware's
app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on Port : ${PORT}`)
})