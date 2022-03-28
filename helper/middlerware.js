"use strict";
let { HttpStatus, ErrorCode, Message } = require("../helper/localization");
let Service = require("../helper/index");
const userService=require("../services/userServices")
const send = Service.sendResponse;



module.exports = {

  authenticateUser: async function (req, res, next) {
    try {
      const accessToken = req.headers.token;
      console.log(req.headers.token);
      if (accessToken === undefined) {
        return send(res, HttpStatus.BAD_REQUEST_STATUS_CODE, ErrorCode.REQUIRED_CODE, Message.TOKEN_REQUIRED, null);
      }

      const token = Service.verifyJwt(accessToken);
      console.log(token);
      if (!token.isValid) {
        return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.TOKEN_INVALID, null);
      }

      const user = await userService.getUserById(token.sub);
      if (!user) {
        return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.TOKEN_INVALID, null);
      }

      req.authUser = user;
      console.log(user);
      return next();
    } catch (err) {
      next(err);
    }
  },

};