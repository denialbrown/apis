const express = require('express');
const router = express.Router();
const adminController = require("../controler/adminControler");
const userController = require("../controler/userControler");


router.get('/',adminController.indexView)
router.post('/logIn',userController.loginUser)
router.get('/signUp',adminController.signupView)
router.post('/signup',userController.signupUser)
router.get('/home',adminController.home)
module.exports = router