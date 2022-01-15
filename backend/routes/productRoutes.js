import { protect,admin } from '../middleware/authMiddleware.js';
import {
    getProducts,
    getProductById,
    deleteProduct
} from './../controllers/productController.js';

import express from 'express';
const router=express.Router();

router
    .route('/')
    .get(getProducts)

router
    .route('/:id')
    .get(getProductById)
    .delete(protect,admin,deleteProduct)

export default router