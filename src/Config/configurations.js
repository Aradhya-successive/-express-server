"use strict";
exports.__esModule = true;
exports.configurations = void 0;
var dotenv = require("dotenv");
dotenv.config();
exports.configurations = Object.freeze({
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV || "local"
});
