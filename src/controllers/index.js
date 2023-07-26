const { generateToken, sanitizeUser, hashPassword, comparePassword } = require("../services");

const User = require('../models');

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: 'Bad Request'});
        }

        const user = await User.findOne({email});

        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const isMatch = await comparePassword(password, user.password);

        if(!isMatch) {
            return res.status(401).json({message: 'Unauthorized'});
        }

        const access_token = await generateToken({email: user.email}, process.env.ACCESS_SECRET, process.env.ACCESS_EXPIRES_IN);

        await user.save();

        return res.status(200).json({message: 'Success', data: {access_token, user: sanitizeUser(user)}});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
}


exports.register = async (req, res) => {

    try {
        const {email, password, name} = req.body;
        if (!email || !password) {
            return res.status(400).json({message: 'Bad Request'});
        }

        const user = new User({
            email,
            password: await hashPassword(password),
            name
        });

        await user.save();

        return res.status(200).json({message: 'Success', data: sanitizeUser(user)});

    }catch(error) {
        console.error(error);
        return res.status(500).json({message: 'Internal Server Error'});
    }


}


exports.doSomething = async (req, res) => {
    try {
        const {token_payload} = req.body;
        return res.status(200).json({message: 'Success', data: token_payload});
    } catch (error) {
        return res.status(500).json({message: 'Internal Server Error'});
    }
}