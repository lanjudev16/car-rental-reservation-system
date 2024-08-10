import express from "express";
import userRouter from "../model/user/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRouter
  }
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
