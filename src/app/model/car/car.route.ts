import { Router } from "express";
import { carController } from "./car.controller";
import validateRequest from "../../middlewares/validateRequest";
import { carValidate } from "./car.validate";

const router=Router()
router.post('/',validateRequest(carValidate.carValidateSchema),carController.createCar)
const carRouter=router
export default carRouter