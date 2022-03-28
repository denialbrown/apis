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
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: [1, 2, 3],
    default: '1',
  },
  dob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
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
}, {
  timestamps: true,
});





module.exports = mongoose.model("user", userSchema);


