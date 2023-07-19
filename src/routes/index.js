const router = require('express').Router();


const {
    login,
    doSomething
} = require('../controllers');
const { protect } = require('../middlewares');

router.post('/login', login);

router.get('/do-something', [protect], doSomething);


module.exports = router;