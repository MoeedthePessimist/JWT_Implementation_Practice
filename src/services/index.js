const {jwtConfig} = require('../config/jwtConfig')
const jwt = require('jsonwebtoken');
const { SALT } = require('../constants');
const bcrypt = require('bcrypt')


exports.generateToken = async (payload, secret, expires_in) => {
    const {payload: _payload, secret: _secret, expiry} = jwtConfig(payload, secret, expires_in);
    return await jwt.sign(_payload, _secret, expiry);
}

exports.verifyToken = async (token) => {
    const {secret, expiry} = jwtConfig(null);
    return await jwt.verify(token, secret, expiry);
}

exports.decodeToken = async (token) => {
    return await jwt.decode(token, {complete: true});
}

exports.getPayload = async (token) => {
    const {payload} = await this.decodeToken(token);
    return payload;
}

exports.getHeaders = (req) => {
    return req.headers;
}

exports.getTokenFromHeaders = (req) => {
    const {authorization} = this.getHeaders(req);
    return authorization.split(' ')[1];
}

exports.sanitizeUser = (user) => {
    const {password, refresh_token, ...rest} = user._doc;
    console.log(rest);
    return rest;
}


exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, Number(SALT));
}

exports.comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}
