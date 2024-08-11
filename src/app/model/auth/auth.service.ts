import { TUser } from "../user/user.interface";
import userModel from "../user/user.model";
import { TSign } from "./auth.interface";

const signupUser = async (payLoad:TUser) => {
    const result=await userModel.create(payLoad)
    return result;
};
const signinUser=async(payLoad:TSign)=>{
    const result=await userModel.findOne({email:payLoad.email,password:payLoad.passaword})
    return result
}
export const auhtService={
    signupUser,
    signinUser
}