const router = require('express').Router();


const {
    login,
    register,
    doSomething
} = require('../controllers');
const { protect } = require('../middlewares');

router.post('/login', login);

router.post('/register',register)

router.get('/do-something', [protect], doSomething);


module.exports = router;