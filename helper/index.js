const jwt = require("jsonwebtoken");
const moment = require("moment");
const otpGenerator = require('otp-generator')
const {
    validationResult
} = require("express-validator");
const LOGIN_TOKEN_EXPIRES_IN = 10 * 60 * 1000;
const { ErrorCode, Action } = require("../helper/localization")
require('dotenv').config()


async function generateJwt(payload, expiresIn) {

    let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: LOGIN_TOKEN_EXPIRES_IN,
        algorithm: process.env.JWT_ALGORITHM,
    });
    return token;
}

module.exports = {
    isRequired: function (data) {
        if (typeof data == "string" && data.trim().length == 0) return true;
        if (typeof data == "number" && data == 0) return false;
        return data == "" || data == "undefined" || data == null ? true : false;
    },
    getCurrentTimeStampWithAdditionMinutes: function (minutes) {
        return moment().add(minutes, "minutes").unix();
    },
    generateOneTimePassword: async function (length) {

        return otpGenerator.generate(length, { digits: true, specialChars: false, upperCaseAlphabets: false, lowerCaseAlphabets: false });
    },
    sendResponse(res, status, code, message, payload) {
        return res.status(status).send(prepareResponse(code, message, payload));
    },
    hasValidatorErrors: function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = errors.array()[0];
            let msg;

            if (err.msg === "Invalid value") {
                msg = `Parameter ${err.location}.${err.param} ${err.msg}.`;
            }

            res.status(400).json(this.response(ErrorCode.REQUIRED_CODE, msg, errors.array()));
            return true;
        } else {
            return false;
        }
    },
    response: function (internalCode, message, data) {
        if (data != null || data != undefined) {
            return {
                responseCode: internalCode,
                responseMessage: message,
                responseData: data,
            };
        }
        return {
            responseCode: internalCode,
            responseMessage: message,
        };
    },
    generateToken: async function (user) {
        return generateJwt({
            sub: user._id,
            action: Action.LOGIN
        }, LOGIN_TOKEN_EXPIRES_IN);
    },
    generateAccessToken: async function (userId, _email) {
        return generateJwt({
            sub: userId,
            action: Action.ACCESS
        }, process.env.JWT_EXPIRES_IN);
    },
    verifyJwt: function (token) {
        try {
            let tokenData = jwt.verify(token, process.env.JWT_SECRET);
            if (tokenData && this.getCurrentTimeStampUnix() > tokenData.exp) {
                return {
                    isValid: false,
                    reason: "expired"
                };
            } else if (tokenData && this.getCurrentTimeStampUnix() < tokenData.exp) {
                return {
                    isValid: true,
                    ...tokenData
                };
            } else {
                return {
                    isValid: false,
                    reason: "invalid"
                };
            }
        } catch (err) {
            return {
                isValid: false,
                reason: "invalid"
            };
        }
    },
    getCurrentTimeStampUnix: function () {
        return moment().unix();
    },
    

}

function prepareResponse(status, message, data) {
    if (data != null || data != undefined) {
        return {
            responseCode: status,
            responseMessage: message,
            responseData: data,
        };
    }
    return {
        responseCode: status,
        responseMessage: message,
    };
}