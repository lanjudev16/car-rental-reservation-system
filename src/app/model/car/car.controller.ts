import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { carService } from "./car.service"

const createCar = catchAsync(async (req: Request, res: Response) => {
    const car = req.body
    const result = await carService.createCar(car)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Car create successfully",
        data: result
    })
})
export const carController={
    createCar
}