const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;
const AUTH_SECRET = process.env.AUTH_SECRET
const AUTH_EXPIRES_IN = process.env.AUTH_EXPIRES_IN
const ALGORITHM = process.env.ALGORITHM
const CONNECTION_STRING = process.env.CONNECTION_STRING
const SALT = process.env.SALT
const REFRESH_SECRET = process.env.REFRESH_SECRET
const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN

module.exports = {
    PORT,
    AUTH_SECRET,
    AUTH_EXPIRES_IN,
    ALGORITHM,
    CONNECTION_STRING,
    SALT,
    REFRESH_SECRET,
    REFRESH_EXPIRES_IN
}