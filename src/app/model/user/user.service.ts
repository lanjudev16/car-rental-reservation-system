import { TUser } from "./user.interface";
import userModel from "./user.model";

const createUser = async (payLoad:TUser) => {
    const result=await userModel.create(payLoad)
    return result;
};
export const userService={
    createUser
}