const express=require("express")
const dotenv=require('dotenv')
dotenv.config()
const app =express();
const products=require('./data/products')


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