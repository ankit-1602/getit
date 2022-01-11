import express from 'express';
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config();
connectDB();

const app =express();


app.get('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        message:'This is the home page.'
    })
})

app.get('/api/products',(req,res)=>{
    res.status(200).json({
        status:'success',
        products
    })
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find(prod => prod._id===req.params.id)
    res.status(200).json({
        status:'success',
        product
    })
})


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on Port : ${PORT}`)
})