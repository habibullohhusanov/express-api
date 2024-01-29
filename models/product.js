import mongoose from "mongoose";

const Schema = mongoose.Schema

const products = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    }
})

const Product = mongoose.model('Product', products)
export default Product