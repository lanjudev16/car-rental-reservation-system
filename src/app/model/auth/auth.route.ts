import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import userValidateSchema from "../user/user.validate";
import { authValidate } from "./auth.validate";

const router=Router()
router.post('/signup',validateRequest(userValidateSchema),authController.signupUser)
router.post('/signin',validateRequest(authValidate.authValidateSigninSchema),authController.signinUser)
const authRouter=router
export default authRouter