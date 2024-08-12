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
const reretrieveCar = catchAsync(async (req: Request, res: Response) => {
    const result = await carService.reretrieveCar()
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Cars retrieved successfully",
        data: result
    })
})
const reretrieveSingleCar = catchAsync(async (req: Request, res: Response) => {
    const id=req.params.id
    const result = await carService.reretrieveSingleCar(id)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "A Car retrieved successfully",
        data: result
    })
})
const updateCar = catchAsync(async (req: Request, res: Response) => {
    const id=req.params.id
    const body=req.body
    const result = await carService.updateCar(id,body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Car updated successfully",
        data: result
    })
})
const returnCar = catchAsync(async (req: Request, res: Response) => {
    const body=req.body
    const result = await carService.returnCar(body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Car returned successfully",
        data: result
    })
})
const deleteCar = catchAsync(async (req: Request, res: Response) => {
    const id=req.params.id
    const result = await carService.deleteCar(id)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Car Deleted successfully",
        data: result
    })
})
export const carController={
    createCar,
    reretrieveCar,
    reretrieveSingleCar,
    updateCar,
    deleteCar,
    returnCar
}