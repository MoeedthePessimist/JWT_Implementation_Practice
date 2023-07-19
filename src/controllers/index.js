const { generateToken } = require("../services");

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (email === 'test@gmail.com' && password === 'test') {
            const token = await generateToken({email, password});
            return res.status(200).json({message: 'Success', data: token});
        }
        return res.status(401).json({message: 'Unauthorized'});
    } catch (error) {
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