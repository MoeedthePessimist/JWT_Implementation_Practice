const {jwtConfig} = require('../config/jwtConfig')
const jwt = require('jsonwebtoken');


exports.generateToken = async (payload) => {
    const {payload: _payload, secret, expiry} = jwtConfig(payload);
    return await jwt.sign(_payload, secret, expiry);
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

