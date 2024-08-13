import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"
import { bookingService } from "./booking.service"

const createBooking = catchAsync(async (req: Request, res: Response) => {
    const booking = req.body
    booking.user=req.user.id
    const result = await bookingService.createBooking(booking)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Car booked successfully",
        data: result
    })
})
const retrieveBooking = catchAsync(async (req: Request, res: Response) => {
    const query = req.query
    const result = await bookingService.retrieveBooking(query)
    let message;
    if((result.length>0)){
        message="Bookings retrieved successfully"
    }else{
        message="No Data Found"
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message:message,
        data: result
    })
})
const retrieveSingleUserBooking = catchAsync(async (req: Request, res: Response) => {
    const user = req.user.id
    const result = await bookingService.retrieveSingleUserBooking(user)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My Bookings retrieved successfully",
        data: result
    })
})
export const bookingController={
    createBooking,
    retrieveBooking,
    retrieveSingleUserBooking
}