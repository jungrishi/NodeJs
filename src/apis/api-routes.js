import { Router } from "express";
const router = Router();

router.get("/", (request, response, next) => {
  if (false) {
    useValidate(username, password);
    next();
  } else {
    response.send("invalid user");
  }
  // response.json({
  //   status: "API working",
  //   message: "Welcome from backend",
  //   id: "1",
  // });
});

router.get("/", (req, res) => {
  console.log("valid user");
  // res.json({
  //   status: "users API working",
  //   message: "Welcome from backend",
  //   id: "1",
  // });
  //return res.send(Object.values(req.context.models.users));
});

export default router;
