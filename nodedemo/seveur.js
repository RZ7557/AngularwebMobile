"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
app.get('/', function (req, res) {
    res.send("salut");
});
app.get('/kelheureestil', function (req, res) {
    res.send(new Date());
});
app.listen(4201, function () {
    console.log("le port est ouvert");
});
