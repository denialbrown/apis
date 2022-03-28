const express = require('express');
const router = express.Router();
const userController = require("../controler/userControler");
const middleware = require("../helper/middlerware")


let { Message } = require("../helper/localization");
const { body } = require("express-validator");

router.post("/signup",

  body("firstName").exists().withMessage(Message.FIRST_NAME_IS_REQUIRED).not().isEmpty().isLength(3).isAlpha().withMessage(Message.MINIMUM_CHARACTER),
  body("lastName").exists().withMessage(Message.LAST_NAME_IS_REQUIRED).not().isEmpty().isLength(3).isAlpha().withMessage(Message.MINIMUM_CHARACTER_LASTNMAE),
  body("gender").exists().withMessage(Message.GENDER_IS_REQUIRED).not().isEmpty().isNumeric({ min: 0, max: 3 }).withMessage(Message.MINIMUM_NUMBER),
  body("dob").exists().withMessage(Message.DOB_IS_REQUIRED).not().isEmpty(),
  body("email").exists().withMessage(Message.EMAIL_IS_REQUIRED).not().isEmpty().isEmail().withMessage(Message.EMAIL_FORMAT),
  body("phone").exists().isMobilePhone().withMessage(Message.PHONE_IS_REQUIRED).not().isEmpty(),
  body("countryCode").exists().withMessage(Message.COUNTRY_CODE_IS_REQUIRED).not().isEmpty(),

  userController.signupUser);

router.get("/getUser", [middleware.authenticateUser], userController.getUser);

router.post("/update/user", [middleware.authenticateUser],

  body("firstName").exists().withMessage(Message.FIRST_NAME_IS_REQUIRED).not().isEmpty().isLength(3).isAlpha().withMessage(Message.MINIMUM_CHARACTER),
  body("lastName").exists().withMessage(Message.LAST_NAME_IS_REQUIRED).not().isEmpty().isLength(3).isAlpha().withMessage(Message.MINIMUM_CHARACTER_LASTNMAE),
  body("gender").exists().withMessage(Message.GENDER_IS_REQUIRED).not().isEmpty().isNumeric({ min: 0, max: 3 }).withMessage(Message.MINIMUM_NUMBER),
  body("dob").exists().withMessage(Message.DOB_IS_REQUIRED).not().isEmpty(),
  body("email").exists().withMessage(Message.EMAIL_IS_REQUIRED).not().isEmpty().isEmail().withMessage(Message.EMAIL_FORMAT),
  body("phone").exists().withMessage(Message.PHONE_IS_REQUIRED).not().isEmpty(),
  body("countryCode").exists().withMessage(Message.COUNTRY_CODE_IS_REQUIRED).not().isEmpty(),
  body("otp").exists().withMessage(Message.OTP_IS_REQUIRED).not().isEmpty(),

  userController.updateUser);

router.post("/logIn",
  body("phone").exists().isMobilePhone().withMessage(Message.PHONE_IS_REQUIRED).not().isEmpty(),
  userController.loginUser);


router.post("/add/city", [middleware.authenticateUser],
  body("cityName").exists().withMessage(Message.CITY_IS_REQUIRED).not().isEmpty(),
  userController.addCity);

router.post("/add/state", [middleware.authenticateUser],
  body("stateName").exists().withMessage(Message.STATE_IS_REQUIRED).not().isEmpty(),
  userController.addState);

router.post("/logIn/token",
  body("token").exists().withMessage(Message.TOKEN_IS_REQUIRED).not().isEmpty(),
  body("otp").exists().withMessage(Message.OTP_IS_REQUIRED).not().isEmpty(),
  userController.loginOtp);

module.exports = router
