import User from "../models/user.js"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        await User.findOne({ email }).then((data) => {
            let isCheck = data.checkPassword(password);
            console.log(isCheck);
            if (isCheck) {
                return res.status(200).json({
                    status: true,
                    data: data,
                    message: "User"
                });
            }
            return res.status(401).json({
                status: false,
                data: [],
                message: `Data incorrect`,
            });
        }).catch((error) => {
            return res.status(401).json({
                status: false,
                data: [],
                message: `Data incorrect`,
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
export const logout = async (req, res) => {
    //
}
export const user = async (req, res) => {
    //
}
export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const newUser = new User({
            name, email, password
        });
        await newUser.save().then((data) => {
            return res.status(201).json({
                status: true,
                data: data,
                message: "Yaratildi"
            });
        }).catch((error) => {
            if (error.code === 11000 && error.keyPattern) {
                if (error.keyPattern.email) {
                    return res.status(500).json({
                        status: false,
                        data: [],
                        message: `${error.keyValue.email} email allready exsist`,
                    });
                }
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