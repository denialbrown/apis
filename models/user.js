const express = require("express");
const mongoose = require("mongoose");
"use strict";

const {
  Schema,
  model
} = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
    enum: [1, 2, 3],
    default: '1',
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  otp: {
    type: String,
  },
  otpCreatedAt: {
    type: Number,
  },
  otpVerified: {
    type: Boolean,
    default: false,
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
  profileImage: {
    type: String,
  }
}, {
  timestamps: true,
});



module.exports = mongoose.model("user", userSchema);


