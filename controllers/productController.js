import Product from "../models/product.js"

export const index = async (req, res) => {
    try {
        const prods = await Product.find();
        return res.status(200).json({
            status: true,
            data: prods,
            message: "Barcha mahsulotlar"
        });
    } catch (error) {
        return res.status(500).send({
            error: error.message
        });
    }
}
export const store = async (req, res) => {
    try {
        const newProd = new Product(req.body);
        await newProd.save().then((data) => {
            return res.status(201).json({
                status: true,
                data: newProd,
                message: "Yaratildi"
            });
        }).catch((err) => {
            if (err.code === 11000 && err.keyPattern && err.keyPattern.title) {
                return res.status(500).json({
                    status: false,
                    data: [],
                    message: `${err.keyValue.title} product allready exsist`,
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            error: error.message
        });
    }
}
export const view = async (req, res) => {
    //
}
export const update = async (req, res) => {
    //
}
export const destroy = async (req, res) => {
    //
}