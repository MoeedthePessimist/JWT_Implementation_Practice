const {
    JWT_EXPIRES_IN,
    JWT_SECRET
} = require('../constants')

exports.jwtConfig = (payload) => {
    return { 
        payload,
        secret: JWT_SECRET,
        expiry: {
            expiresIn: JWT_EXPIRES_IN
        }
    }
}


