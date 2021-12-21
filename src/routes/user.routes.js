const express = require("express");
const router = express.Router();
const guestMideleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddleware');

const userController = require('../controllers/user.controller');



router.get('/login',guestMideleware, userController.login);
router.post('/login', userController.loginProcess);

router.get('/register',guestMideleware, userController.register);



module.exports = router;