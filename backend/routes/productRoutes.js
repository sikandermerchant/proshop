import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// import products from '../data/products.js';


router.get('/', asyncHandler(async (req, res) => { 
  const products = await Product.find({});
  if(products) {
    res.status(200).json(products);
  } else {
    res.status(404);
    throw new Error('Products not found');
  }
}));


router.get('/:id', asyncHandler(async(req, res) => { 
  // const product = products.find((p) => p._id === req.params.id);
  const product = await Product.findById(req.params.id);
  res.json(product);
}));

export default router;