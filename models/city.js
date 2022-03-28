"use strict";

const {
    Schema,
    model
} = require("mongoose");


const citySchema = new Schema({
    cityName: {
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: false,
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

module.exports = model("city", citySchema);