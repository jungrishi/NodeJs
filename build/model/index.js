"use strict";

var _knex = _interopRequireDefault(require("knex"));

var _net = require("net");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = (0, _knex["default"])({
  client: "pg",
  connection: {
    host: "http://localhost:5001",
    user: "rishi",
    password: "",
    database: "myapp_test"
  }
});
db.connect();

_knex["default"].schema.createTable("users", function (table) {
  table.increments("id");
  table.string("user_name");
  table.unique("email_id");
  table.timestamps();
}).createTable("accounts", function (table) {
  table.increments("id");
  table.string("account_name");
  table.foreign("user_id").unsigned().references("users_id");
}).then(function () {
  return (0, _knex["default"])("users").insert({
    user_name: "rishi",
    email_id: "ranabhat.85@gmail.com"
  });
}).then(function (rows) {
  return (0, _knex["default"])("account").insert({
    account_name: "jungRishi",
    user_id: rows[0]
  });
}).then(function () {
  return (0, _knex["default"])("users").join("accounts", "users.id", "accouns.user_id").select("users.user_name as user", "accounts.account_name as account");
}).map(function (row) {
  console.log(row);
})["catch"](function (err) {
  console.log(err);
}); // export default db;