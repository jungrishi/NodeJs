"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)(); // router.get("/", (req, res) => {
//   res.json({
//     status: "users API working",
//     message: "Welcome from backend",
//     id: "1",
//   });
//   //return res.send(Object.values(req.context.models.users));
// });

router.get("/:userId", function (req, res) {
  res.json({
    status: "userId API working",
    message: "Welcome from backend",
    id: "1"
  }); //return res.send(req.context.models.users[req.params.userId]);
});
var _default = router;
exports["default"] = _default;