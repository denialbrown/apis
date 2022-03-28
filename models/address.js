"use strict";

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        required: false,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    address3: {
        type: String,
    },
    landMark: {
        type: String,
        required: true,
    },
    cityId: {
        type:  mongoose.Schema.Types.ObjectId ,
        required: true,
        ref: "city",
    },
    stateId: {
        type:  mongoose.Schema.Types.ObjectId ,
        required: true,
        ref: "state",
    },
    pincode: {
        type: String,
        required: true,
    },
    addresstype: {
        type: String,
        enum: ['home', 'office', 'other'],
        default: 'home',
    },
    status: {
        type: String,
        enum: ['active', 'inActive'],
        default: 'active',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    createdAt: Number,
    updatedAt: Number,
}, {
    timestamps: true,
});

module.exports = mongoose.model("addAddress", addressSchema);


