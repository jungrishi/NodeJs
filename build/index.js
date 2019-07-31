"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _apis = _interopRequireDefault(require("./apis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = 5000;
app.use("/", function (req, res, next) {
  console.log("use middleware", req.originalUrl);
  next();
}, function (req, res, next) {
  console.log("request tupe", req.method);
  next();
});
app.get("/", function (req, res) {
  res.send("Hello world from the Express server");
});
app.use("/api", _apis["default"].rootApi); // app.use("/api/users", Routes.user);

app.listen(port, function () {
  console.log("Running rest from port: ".concat(port));
});