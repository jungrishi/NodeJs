import { Router } from "express";
const router = Router();

// router.get("/", (req, res) => {
//   res.json({
//     status: "users API working",
//     message: "Welcome from backend",
//     id: "1",
//   });
//   //return res.send(Object.values(req.context.models.users));
// });

router.get("/:userId", (req, res) => {
  res.json({
    status: "userId API working",
    message: "Welcome from backend",
    id: "1",
  });
  //return res.send(req.context.models.users[req.params.userId]);
});

export default router;
