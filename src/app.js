"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var helmet = require("helmet");
var dotenv = require("dotenv");
var Joi = require('joi');
var app = express();
app.use(cors());
app.use(helmet());
dotenv.config({
    path: '.env'
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
