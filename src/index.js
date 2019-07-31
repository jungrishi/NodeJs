import express from "express";
let app = express();
import bodyParser from "body-parser";
import Routes from "./apis";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let port = 5000;

app.use(
  "/",
  (req, res, next) => {
    console.log("use middleware check url hash", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("request tupe chack authenticity", req.method);
    next();
  }
);

app.get("/", (req, res) => {
  res.send("Authorized user Hello world from the Express server");
});

app.use("/api", Routes.rootApi);
// app.use("/api/users", Routes.user);

app.listen(port, function() {
  console.log(`Running rest from port: ${port}`);
});
