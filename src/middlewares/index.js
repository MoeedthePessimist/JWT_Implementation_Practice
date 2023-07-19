const { getTokenFromHeaders, verifyToken } = require("../services");

exports.protect = async (req, res, next) => {
    try {
        const token = getTokenFromHeaders(req);
        if (!token) {
            return res.status(401).json({message: 'Unauthorized'});
        }
        const decoded = await verifyToken(token);
        req.body.token_payload = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}