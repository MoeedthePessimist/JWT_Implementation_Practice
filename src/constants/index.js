const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN
const ALGORITHM = process.env.ALGORITHM

module.exports = {
    PORT,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ALGORITHM
}