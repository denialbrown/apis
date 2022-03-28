
const addressSchema = require("../models/address");
const Service = require("../helper/index");
const stateSchema = require("../models/state");
const citySchema = require("../models/city");
const send = Service.sendResponse;
let {
    HttpStatus,
    Message,
    ErrorCode,
} = require("../helper/localization");


module.exports = {

    address: async function (req, res) {
        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }

            var checkCity = await citySchema.findOne({ _id: req.body.cityId, });
            console.log(checkCity);
            if (checkCity == null) {
                return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.INVALID_CITY_ID);
            }


            var checkState = await stateSchema.findOne({ _id: req.body.stateId, });
            console.log(checkState);
            if (checkState == null) {
                return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.INVALID_STATE_ID, null);
            }

            var newAddress = new addressSchema;
            newAddress.userId = req.authUser._id
            newAddress.address1 = req.body.address1
            newAddress.address2 = req.body.address2
            newAddress.address3 = req.body.address3
            newAddress.landMark = req.body.landMark
            newAddress.cityId = req.body.cityId
            newAddress.stateId = req.body.stateId
            newAddress.pincode = req.body.pincode

            var addNewAddress = await newAddress.save()

            if (addNewAddress) {
                return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.ADDRESS_ADD_SUCCESS, { id: addNewAddress._id });
            }

            return send(res, HttpStatus.BAD_REQUEST_STATUS_CODE, HttpStatus.BAD_REQUEST_STATUS_CODE, Message.SOMETHING_WENT_WRONG, null);

        } catch (error) {
            console.log(error);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }

    },
    getAddress: async function (req, res) {

        try {
            const filter = {
                userId: req.authUser._id,
            }
            let addressList = await addressSchema.aggregate([
                {
                    $match: filter,
                },
                {
                    $lookup: {
                        from: "cities",
                        localField: "cityId",
                        foreignField: "_id",
                        as: "city",
                    },
                },
                {
                    $lookup: {
                        from: "states",
                        localField: "stateId",
                        foreignField: "_id",
                        as: "state",
                    },
                },
                {
                    $project: {
                        _id: 1,
                        address1: 1,
                        address2: 1,
                        address3: 1,
                        landMark: 1,
                        countryCode: 1,
                        pinCode: 1,
                        cityName: {
                            $arrayElemAt: ["$city.cityName", 0]
                        },
                        stateName: {
                            $arrayElemAt: ["$state.stateName", 0]
                        },
                        addresstype: 1,
                        isDeleted: 1,
                        status: 1,
                        createdAt: 1,
                        updatedAt: 1,
                    },
                },
            ])
                .exec();


            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.ADDRESS_LIST, addressList);
        } catch (error) {
            console.log(error);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }
    },
    listAddress: async function (req, res) {

        try {
            let addressList = await addressSchema.find({ userId: req.authUser._id })
                .populate('cityId')

                .populate('stateId')

                .exec()

            var mainAddress = []

            addressList.forEach(async (value) => {
                var data = {
                    id: value._id,
                    addresstype: value.addresstype,
                    address1: value.address1,
                    address2: value.address2,
                    address3: value.address3,
                    landmark: value.landMark,
                    pincode: value.pincode,
                    cityName: value.cityId.cityName,
                    stateName: value.stateId.stateName,
                    userId: value.userId,
                }
                mainAddress.push(data)
            })
            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.ADDRESS_LIST, mainAddress);
        } catch (error) {
            console.log(error);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }
    },
    updateaddress: async function (req, res) {

        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }

            console.log(req.params.addressId);
            let checkAddress = await addressSchema.findOne({ _id: req.params.addressId, });
            console.log(checkAddress);
            if (checkAddress) {

                checkAddress.userId = req.authUser._id
                checkAddress.address1 = req.body.address1
                checkAddress.address2 = req.body.address2
                checkAddress.address3 = req.body.address3
                checkAddress.landMark = req.body.landMark
                checkAddress.cityId = req.body.cityId
                checkAddress.stateId = req.body.stateId
                checkAddress.pincode = req.body.pincode
                checkAddress.save();

                return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.ADDRESS_CHANGE_SUCCESSFULLY, {
                    id: checkAddress._id
                });
            }
            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.ADDRESS_NOT_FOUND, null);
        } catch (error) {
            console.log(error);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }
    },
    deleteAddress: async function (req, res) {

        try {
            if (Service.hasValidatorErrors(req, res)) {
                return;
            }
            console.log(req.params.addressId);

            addressSchema.findByIdAndRemove({ _id: req.params.addressId }, function (err) {
                if (err) {
                    console.log(err)
                    return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.ADDRESS_NOT_FOUND, null);
                }
                else {
                    return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.ADDRESS_DELETE_SUCCESSFULLY, null)
                }
            });

            return send(res, HttpStatus.SUCCESS_CODE, HttpStatus.SUCCESS_CODE, Message.INVALID_ADDRESS_ID, null);
        } catch (error) {
            console.log(error);
            return send(res, HttpStatus.INTERNAL_SERVER_CODE, HttpStatus.INTERNAL_SERVER_CODE, Message.SOMETHING_WENT_WRONG);
        }

    }
}