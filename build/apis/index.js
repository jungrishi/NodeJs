"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user"));

var _apiRoutes = _interopRequireDefault(require("./api-routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  user: _user["default"],
  rootApi: _apiRoutes["default"]
};
exports["default"] = _default;