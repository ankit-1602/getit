const express=require("express")
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
        data:{
            products
        }
    })
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find(prod => prod._id===req.params.id)
    res.status(200).json({
        status:'success',
        data:{
            product
        }
    })
})

app.listen(5000,()=>{
    console.log(`Server running on Port : 5000`)
})