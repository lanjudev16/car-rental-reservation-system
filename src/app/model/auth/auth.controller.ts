import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { auhtService } from "./auth.service"

const signupUser = catchAsync(async (req: Request, res: Response) => {
    const user = req.body
    const result = await auhtService.signupUser(user)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User create successfully",
        data: result
    })
})
const signinUser = catchAsync(async (req: Request, res: Response) => {
    const payLoad = req.body
    const result = await auhtService.signupUser(payLoad)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully",
        data: result
    })
})
export const authController={
    signupUser,
    signinUser
}