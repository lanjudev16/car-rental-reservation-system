import { Router } from "express";
import { bookingController } from "./booking.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../constant";

const router=Router()
router.post('/',auth(USER_ROLE.user),bookingController.createBooking)
router.get('/',auth(USER_ROLE.admin),bookingController.retrieveBooking)
router.get('/my-bookings',auth(USER_ROLE.user),bookingController.retrieveSingleUserBooking)
const bookingRouter=router
export default bookingRouter