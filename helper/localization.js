"use strict";
const Message = {

    FIRST_NAME_IS_REQUIRED: "first name is required",
    LAST_NAME_IS_REQUIRED: "last name is required ",
    GENDER_IS_REQUIRED: "gender is required",
    DOB_IS_REQUIRED: "date of birth is required",
    EMAIL_IS_REQUIRED: "email id is required ",
    PHONE_IS_REQUIRED: "Phone number is required",
    COUNTRY_CODE_IS_REQUIRED: "Country code is required",
    MINIMUM_CHARACTER: "first name should be 3 or more characters.",
    MINIMUM_CHARACTER_LASTNMAE: "last name should be 3 or more charachters",
    MINIMUM_NUMBER: "Gender is prefer 3 or lesss then number ",
    EMAIL_FORMAT: "Email is consider email format",
    OTP_IS_REQUIRED: "Otp is required",
    TOKEN_IS_REQUIRED: "otp verification token is required",
    USER_SIGNUP_SUCCESS: "SignIn successfully",
    USER_UPDATE_SUCCESS: "User Updated successfully",
    USER_LOGIN_SUCCESS: "User LogIn successfully",
    SOMETHING_WENT_WRONG: "something went wrong",
    USER_NOT_FOUND: "User not Found",
    TOKEN_REQUIRED: "Access Token required",
    TOKEN_INVALID: "Invalid Token",
    USER_INVALID: "Invalid user",
    ADDRESS_IS_REQUIRED: "Address is required",
    LANDMARK_IS_REQUIRED: "Landmark is required",
    CITY_IS_REQUIRED: "City is required",
    STATE_IS_REQUIRED: "State is required",
    PINCODE_IS_REQUIRED: "Pincode is required",
    ADDRESS_ADD_SUCCESS: "Address added successfully",
    CITY_ADD_SUCCESS: "city added successfully",
    STATE_ADD_SUCCESS: "state added successfully",
    INVALID_CITY_ID: "invalid city id",
    INVALID_STATE_ID: "invalid state id",
    ADDRESS_LIST: "address list sucessfully",
    INVALID_ADDRESS_ID: "invalid address id ",
    ADDRESS_CHANGE_SUCCESSFULLY: "address updated sucessfully",
    ADDRESS_NOT_FOUND: "address not found ",
    ADDRESS_DELETE_SUCCESSFULLY: "address deleted sucessfully",
    OTP_INVALID:"otp invalid ",
    FILE_REQUIRED:"file is required",
    IMAGE_UPLOADED_SUCCESS:"image uploaded sucessfully",
    IMAGE_INVALID:"image not uploaded"
};

/**
 * @enum {number}
 */
const HttpStatus = {

    SUCCESS_CODE: 200,
    INTERNAL_SERVER_CODE: 500,
    BAD_REQUEST_STATUS_CODE: 400,
    UNAUTHORIZED_CODE: 401,
    PAGE_NOT_FOUND_CODE: 404,
    UNAUTHORIZED: 401,
};

/**
 * @enum {number}
 */
const ErrorCode = {

    REQUIRED_CODE: 2022,
    INVALID_CODE: 2023,
};

const Action = {
    ACCESS: "access",
    LOGIN: "login",
};


module.exports = {
    HttpStatus,
    ErrorCode,
    Message,
    Action,
};

