import express from "express";
import userRouter from "../model/user/user.route";
import carRouter from "../model/car/car.route";
import authRouter from "../model/auth/auth.route";

const router = express.Router();

const moduleRoutes = [
  {
    path:"/auth",
    route:authRouter
  },
  {
    path: "/user",
    route: userRouter
  },
  {
    path:"/cars",
    route:carRouter
  }
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
