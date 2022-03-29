
const userSchema = require("../models/user");
const Service = require("../helper/index");
const stateSchema = require("../models/state");
const citySchema = require("../models/city");
const userService = require("../services/userServices")
const send = Service.sendResponse;
var multiparty = require('multiparty');

const mailService = require("../helper/email")
let {
    HttpStatus,
    ErrorCode,
    Message,
} = require("../helper/localization");

module.exports = {
    signupUser: async function (req, res) {
        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }

            var newUser = new userSchema;
            newUser.firstName = req.body.firstName
            newUser.lastName = req.body.lastName
            newUser.gender = req.body.gender
            newUser.dob = req.body.dob
            newUser.email = req.body.email
            newUser.phone = req.body.phone
            newUser.countryCode = req.body.countryCode
            newUser.otpCreatedAt = await Service.getCurrentTimeStampWithAdditionMinutes(2).valueOf();
            newUser.otp = await Service.generateOneTimePassword(4)
            await newUser.save()
            console.log(newUser);
            const data = {
                loginToken: await Service.generateToken(newUser),
            };
            const UserEmail = req.body.email;

            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.USER_SIGNUP_SUCCESS, data);

        } catch (err) {
            console.log('err', err);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG, null);
        }
    },
    getUser: async function (req, res) {
        try {
            let getUser = await userSchema.findOne({ _id: req.authUser._id },
                {
                    _id: 1,
                    firstName: 1,
                    lastName: 1,
                    gender: 1,
                    dob: 1,
                    email: 1,
                    phone: 1,
                    countryCode: 1,
                    otp: 1,
                    otpCreatedAt: 1,
                    isDeleted: 1,
                    status: 1,
                })
            if (getUser) {
                return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.USER_LOGIN_SUCCESS, getUser);
            }
            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.USER_NOT_FOUND, null);
        } catch (error) {
            console.log('error', error);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG, null);
        }

    },
    updateUser: async function (req, res) {

        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }

            req.authUser.firstName = req.body.firstName
            req.authUser.lastName = req.body.lastName
            req.authUser.gender = req.body.gender
            req.authUser.dob = req.body.dob
            req.authUser.email = req.body.email
            req.authUser.phone = req.body.phone
            req.authUser.countryCode = req.body.countryCode
            await req.authUser.save()
            console.log(req.authUser);

            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.USER_UPDATE_SUCCESS, req.authUser);

        } catch (err) {
            console.log('err', err);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG, null);
        }
    },
    loginUser: async function (req, res) {
        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }
            var user = await userSchema.findOne({ phone: req.body.phone },)

            if (!user) {
                console.log("invalid user");
                return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.USER_INVALID);
            }

            user.otp = await Service.generateOneTimePassword(4)
            user.otpCreatedAt = await Service.getCurrentTimeStampWithAdditionMinutes(0);
            user.save()
            console.log(user);
            const UserEmail = user.email
            const userOtp = user.otp

            await mailService.sendOtpInMail(UserEmail, userOtp)

            const data = {
                loginToken: await Service.generateToken(user),
            };
            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.USER_LOGIN_SUCCESS, data);


        } catch (err) {
            console.log('err', err);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }
    },
    addCity: async function (req, res) {
        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }
            var newCity = new citySchema;
            newCity.user_id = req.authUser._id
            newCity.cityName = req.body.cityName

            var newdata = await newCity.save()

            if (newdata) {
                return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.CITY_ADD_SUCCESS, newdata);
            }

            return send(res, HttpStatus.BAD_REQUEST_STATUS_CODE, HttpStatus.BAD_REQUEST_STATUS_CODE, Message.SOMETHING_WENT_WRONG, null);

        } catch (error) {
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }

    },
    addState: async function (req, res) {
        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }
            var newState = new stateSchema;
            newState.user_id = req.authUser._id
            newState.stateName = req.body.stateName

            var newdata = await newState.save()

            if (newdata) {
                return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.STATE_ADD_SUCCESS, newdata);
            }

            return send(res, HttpStatus.BAD_REQUEST_STATUS_CODE, HttpStatus.BAD_REQUEST_STATUS_CODE, Message.SOMETHING_WENT_WRONG, null);

        } catch (error) {
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }

    },
    loginOtp: async function (req, res) {
        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }

            const token = Service.verifyJwt(req.body.token);
            console.log(token);
            if (!token.isValid) {
                return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.TOKEN_INVALID, null);
            }

            const user = await userService.getUserById(token.sub);
            if (!user) {
                return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.TOKEN_INVALID, null);
            }
            console.log(user);
            var loginTime = await Service.getCurrentTimeStampUnix(0);
            if (user.otp != req.body.otp || user.otpCreatedAt < loginTime) {
                return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.OTP_INVALID);
            }
            user.otp = ""
            user.otpCreatedAt = ""
            user.otpVerified = true
            await user.save()
            console.log(user);
            const data = {
                loginToken: await Service.generateToken(user),
            };
            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.USER_LOGIN_SUCCESS, data);



        } catch (error) {
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }

    },
    addimg: async function (req, res) {
        try {
            var form = new multiparty.Form();
        
            form.parse(req);
            console.log(form);
        } catch (error) {
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }
    }

}
