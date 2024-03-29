let User = require('../models/User.js');
let { hashSync, compareSync } = require('bcrypt');
let jwt = require('jsonwebtoken');

const AuthController = {};

AuthController.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // PASSWORD CODE VALIDATION
        if (password.length < 6) {
            return res.status(500).json({
                success: false,
                message: "Password is shorter than 6 characters",
            });
        }

        const encryptedPassword = hashSync(password, 10);

        const newUser = {
            name: name,
            email: email,
            password: encryptedPassword,
        };

        await User.create(newUser);

        return res.status(200).json({
            success: true,
            message: "Create user successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error?.message || error,
        });
    }
};

AuthController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Validación de lo que me llega por body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }
        const user = await User.findOne({ email: email });
        const isValidPassword = compareSync(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: "Bad Credentials",
            });
        }

        const token = jwt.sign(
            { user_id: user._id, user_role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "20m" }
        );
        let infoUser = {
            name: user.name,
            email: user.email,
            role: user.role,
            id: user._id
        }
        return res.status(200).json({
            success: true,
            message: "User Logged",
            token: token,
            user: infoUser,

        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Login failed",
        });
    }
};

module.exports = AuthController;
