import { protect,admin } from '../middleware/authMiddleware.js';
import {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct
} from './../controllers/productController.js';

import express from 'express';
const router=express.Router();

router
    .route('/')
    .get(getProducts)
    .post(protect,admin,createProduct)

router
    .route('/:id')
    .get(getProductById)
    .delete(protect,admin,deleteProduct)

export default router