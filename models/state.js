"use strict";

const {
    Schema,
    model
} = require("mongoose");


const stateSchema = new Schema({
    stateName: {
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

module.exports = model("state", stateSchema);