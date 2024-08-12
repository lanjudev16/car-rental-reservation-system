import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import userModel from "../user/user.model";
import { TSign } from "./auth.interface";
import  jwt from "jsonwebtoken"
import config from "../../config";

const signupUser = async (payLoad:TUser) => {
    const result=await userModel.create(payLoad)
    return result;
};
const signinUser=async(payLoad:TSign)=>{
    const user=await userModel.findOne({email:payLoad.email})
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"User is not found")
    }
    const isPasswordMatch=await userModel.findOne({password:payLoad.password})
    if(!isPasswordMatch){
        throw new AppError(httpStatus.NOT_FOUND,"Password is not match")
    }
    const jwtUserPaylod={
        email:user.email,
        role:user.role,
        name:user.name,
        id:user._id
    }
    const accessToken=jwt.sign(jwtUserPaylod,config.jwt_access_secret as string,{
        expiresIn:config.jwt_access_expires_in
    })
    return {user,token:accessToken}
}
export const auhtService={
    signupUser,
    signinUser
}