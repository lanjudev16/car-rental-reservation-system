/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import bookingModel from "./booking.model";
import mongoose from "mongoose";
import carModel from "../car/car.model";

const createBooking = async (payLoad:any) => {
    const bookingInfo={
        car:payLoad.carId,
        date:payLoad.date,
        startTime:payLoad.startTime,
        user:payLoad.user,
    }
    const carInfo=await carModel.findById(payLoad.carId) 
    if(!(carInfo?.status=="available")){
        throw new AppError(httpStatus.BAD_REQUEST,"Car is not available now")
    }
    const session=await mongoose.startSession()
    try{
        session.startTransaction()
        const result=await bookingModel.create([bookingInfo],{session})
        await carModel.findByIdAndUpdate(payLoad.carId,{status:"unavailable"},{new:true,runValidators:true,session})
        await session.commitTransaction();
        await session.endSession();    
        return result;
    }catch(err:any){
        await session.abortTransaction();
        await session.endSession();
        throw new AppError(httpStatus.BAD_REQUEST,err)
    }
    
};
const retrieveBooking = async (payLoad:Record<string,unknown>) => {
    const id=payLoad.carId
    const date=payLoad.date
    const carBookingDate=new Date(date as Date)
    const result=await bookingModel.find({car:id,date:carBookingDate})
    return result;
};
const retrieveSingleUserBooking = async (payLoad:string) => {
    const result=await bookingModel.find({user:payLoad})
    return result;
};
export const bookingService={
    createBooking,
    retrieveBooking,
    retrieveSingleUserBooking
}