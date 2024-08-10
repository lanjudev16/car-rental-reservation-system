import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"
import { userService } from "./user.service"

const createUser = catchAsync(async (req: Request, res: Response) => {
    const user = req.body
    const result = await userService.createUser(user)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User create successfully",
        data: result
    })
})
export const userController={
    createUser
}