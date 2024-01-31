import Product from "../models/product.js"

export const index = async (req, res) => {
    try {
        await Product.find().then((data) => {
            return res.status(200).json({
                status: true,
                data: data,
                message: "Barcha mahsulotlar"
            });
        }).catch((error) => {
            return res.status(500).json({
                status: false,
                data: [],
                message: error,
            });
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: [],
            message: error.message,
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
        }).catch((error) => {
            if (error.code === 11000 && error.keyPattern && error.keyPattern.title) {
                return res.status(500).json({
                    status: false,
                    data: [],
                    message: `${error.keyValue.title} product allready exsist`,
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: [],
            message: error.message,
        });
    }
}
export const view = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findById(id).then((data) => {
            return res.status(200).json({
                status: true,
                data: data,
                message: "Mahsulot"
            });
        }).catch((error) => {
            return res.status(500).json({
                status: false,
                data: [],
                message: error,
            });
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: [],
            message: error.message,
        });
    }
}
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        await Product.findOneAndUpdate({_id: id}, updateData, {new: true}).then((data) => {
            return res.status(200).json({
                status: true,
                data: data,
                message: "O'zgartirildi"
            });
        }).catch((error) => {
            return res.status(500).json({
                status: false,
                data: [],
                message: error,
            });
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: [],
            message: error.message,
        });
    }
}
export const destroy = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id).then((data) => {
            return res.status(200).json({
                status: true,
                data: data,
                message: "Mahsulot o'chirildi"
            });
        }).catch((error) => {
            return res.status(500).json({
                status: false,
                data: [],
                message: error,
            });
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: [],
            message: error.message,
        });
    }
}
export const search = async (req, res) => {
    try {
        const search = req.query.search;
        const regSearch = new RegExp(search, "i");
        await Product.find({
            $or: [{title: regSearch}]
        }).then((data) => {
            return res.status(200).json({
                status: data.length > 0 ? true : false,
                data: data,
                message: data.length > 0 ? "Topilgan mahsulotlar" : "Mahsulot topilmadi"
            });
        }).catch((error) => {
            return res.status(500).json({
                status: false,
                data: [],
                message: error+" catch",
            });
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: [],
            message: error.message,
        });
    }
}