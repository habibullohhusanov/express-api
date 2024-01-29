import express from "express";
import Product from "../models/product.js";
const router = express.Router()

router.post('/', async(req,res)=>{
    try {
        const newProd =  new Product(req.body)
        const savedProd = await newProd.save()
        return res.status(201).json(newProd)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
})

export default router