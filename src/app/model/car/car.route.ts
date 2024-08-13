import { Router } from "express";
import { carController } from "./car.controller";
import validateRequest from "../../middlewares/validateRequest";
import { carValidate } from "./car.validate";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../constant";

const router=Router()
router.post('/',validateRequest(carValidate.carValidateSchema),auth(USER_ROLE.admin),carController.createCar)

router.get('/',carController.reretrieveCar)
router.get('/:id',carController.reretrieveSingleCar)
router.put('/return',auth(USER_ROLE.admin),carController.returnCar)
router.put('/:id',auth(USER_ROLE.admin),carController.updateCar)
router.delete('/:id',auth(USER_ROLE.admin),carController.deleteCar)
const carRouter=router
export default carRouter