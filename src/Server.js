"use strict";
exports.__esModule = true;
var express = require("express");
var server = /** @class */ (function () {
    function server(config) {
        this.config = config;
        this.application = express();
    }
    server.prototype.bootstrap = function () {
        this.setupRoutes();
        return this;
    };
    server.prototype.setupRoutes = function () {
        this.application.get("/health-check", function (req, res) {
            res.send("I am OK");
        });
    };
    server.prototype.run = function () {
        console.log('Inside setupRputes method');
        var runningServer = this.application.listen(this.config.port);
        runningServer.on("Success", function () {
            console.log("Application is running successfully");
        });
        runningServer.on("error", function (err) {
            console.error(err);
        });
    };
    return server;
}());
exports["default"] = server;
