const express = require('express');
const router = express.Router();
const addressController = require("../controler/addressControler");
const middleware = require("../helper/middlerware")

let { Message } = require("../helper/localization");
const { body, param } = require("express-validator");

router.post("/add/address", [middleware.authenticateUser],


    body("address1").exists().withMessage(Message.ADDRESS_IS_REQUIRED).not().isEmpty(),
    body("address2").exists().withMessage(Message.ADDRESS_IS_REQUIRED).not().isEmpty(),
    body("address3").exists().withMessage(Message.ADDRESS_IS_REQUIRED).not().isEmpty(),
    body("landMark").exists().withMessage(Message.LANDMARK_IS_REQUIRED).not().isEmpty(),
    body("cityId").exists().isMongoId().withMessage(Message.INVALID_CITY_ID),
    body("stateId").exists().isMongoId().withMessage(Message.INVALID_STATE_ID),
    body("pincode").exists().withMessage(Message.PINCODE_IS_REQUIRED).not().isEmpty(),
    addressController.address);

router.get("/getAddress", [middleware.authenticateUser], addressController.getAddress);

router.get("/address/getAddress", [middleware.authenticateUser], addressController.listAddress);

router.post("/address/update/:addressId", [middleware.authenticateUser],

    param("addressId").exists().isMongoId().withMessage(Message.INVALID_ADDRESS_ID),
    body("address1").exists().withMessage(Message.ADDRESS_IS_REQUIRED).not().isEmpty(),
    body("address2").exists().withMessage(Message.ADDRESS_IS_REQUIRED).not().isEmpty(),
    body("address3").exists().withMessage(Message.ADDRESS_IS_REQUIRED).not().isEmpty(),
    body("landMark").exists().withMessage(Message.LANDMARK_IS_REQUIRED).not().isEmpty(),
    body("cityId").exists().isMongoId().withMessage(Message.INVALID_CITY_ID),
    body("stateId").exists().isMongoId().withMessage(Message.INVALID_STATE_ID),
    body("pincode").exists().withMessage(Message.PINCODE_IS_REQUIRED).not().isEmpty(),
    addressController.updateaddress);


module.exports = router


