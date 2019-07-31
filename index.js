const express = require("express");
const app = express();
const port = 5000;

app.get("/", function(req, res) {
  res.send("hello world");
});

var myLogger = function(req, res, next) {
  res.send(res.json());
  next();
};

app.use(myLogger);

app.listen(port, () => console.log(`server stated: ${port}`));
