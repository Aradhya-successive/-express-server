"use strict";
exports.__esModule = true;
var configurations_1 = require("./Config/configurations");
var Server_1 = require("./Server");
var server = new Server_1["default"](configurations_1.configurations);
server.bootstrap().run();
