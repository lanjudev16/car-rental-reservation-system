import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema=new Schema<TUser>({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"] ,
        unique:true
    },
    phone:{
        type:String,
        required:[true,"Phone is required"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'user'],
            message: `{VALUE} is not supported`
        },
        default:'user'
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
}
,
{
    timestamps:true,
    versionKey:false,
    toJSON: {
        transform: function (doc, ret) {
            const reordered = {
                _id: ret._id,
                name: ret.name,
                email: ret.email,
                phone: ret.phone,
                address: ret.address,
                role: ret.role,
                password: ret.password,
                createdAt: ret.createdAt,
                updatedAt: ret.updatedAt,
            };
            return reordered;
        }
    }
}
)
const userModel=model('userModel',userSchema)
export default userModel