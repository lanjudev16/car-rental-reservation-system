/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import bookingModel from "../booking/booking.model";
import { TCar } from "./car.interface";
import carModel from "./car.model";
import mongoose from "mongoose";

const createCar = async (payLoad:TCar) :Promise<TCar>=> {
    const result=await carModel.create(payLoad)
    return result;
};
const reretrieveCar=async()=>{
    const result=await carModel.find()
    return result
}
const reretrieveSingleCar=async(payLoad:string)=>{
    const result=await carModel.findById(payLoad)
    return result
}
const updateCar=async(id:string,payLoad:Partial<TCar>)=>{
    const result=await carModel.findByIdAndUpdate(id,
        payLoad,
    {
        new:true,
        runValidators:true
    })
    return result
}
const deleteCar=async(id:string)=>{
    const result=await carModel.findByIdAndUpdate(id,
    {isDeleted:true},
    {
        new:true,
        runValidators:true
    })
    return result
}
const returnCar=async(payLoad:{bookingId:string,endTime:string})=>{
    const bookingCar=await bookingModel.findById(payLoad.bookingId)
    if(!bookingCar){
        throw new AppError(httpStatus.NOT_FOUND,"Booking car is not found")
    }
    const startTime=parseFloat(bookingCar.startTime)
    const endTime=parseFloat(payLoad.endTime)
    const carId=bookingCar.car
    const car=await carModel.findById(carId)
    if(!car){
        throw new AppError(httpStatus.NOT_FOUND,"car is not found")
    }
    const costPerHour=car!.pricePerHour
    const Cost=(endTime-startTime)*costPerHour
    const session=await mongoose.startSession()
    try{
        session.startTransaction()
        const result=await bookingModel.findByIdAndUpdate(payLoad.bookingId,
            {endTime:payLoad.endTime,totalCost:Cost},
            {
                new:true,
                runValidators:true,
                session
            })
        await carModel.findByIdAndUpdate(carId,{status:"available"},{new:true,runValidators:true,session}) 
        session.commitTransaction()
        session.endSession()
        return result
    }catch(err:any){
        session.abortTransaction()
        session.endSession()
        throw new AppError(httpStatus.BAD_REQUEST,"Failed to transaction")
    }
}
export const carService={
    createCar,
    reretrieveCar,
    reretrieveSingleCar,
    updateCar,
    deleteCar,
    returnCar
}