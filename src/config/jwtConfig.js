const {
    AUTH_EXPIRES_IN,
    AUTH_SECRET
} = require('../constants')

exports.jwtConfig = (payload, secret = AUTH_SECRET, expiresIn = AUTH_EXPIRES_IN) => {
    return { 
        payload,
        secret: secret,
        expiry: {
            expiresIn: expiresIn
        }
    }
}


