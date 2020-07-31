"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(express_1.default.static(__dirname + '/public'));
app.get('/', function (request, response) {
    response.sendFile(path_1.default.join(__dirname + '/public/index.html'));
});
var port = 3333;
app.listen(port, function () {
    console.log("Started on port " + port);
});
//# sourceMappingURL=server.js.map