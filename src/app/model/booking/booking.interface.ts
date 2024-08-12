import mongoose from "mongoose";

export type TBooking = {
    date: Date;
    user: mongoose.Types.ObjectId;
    car: mongoose.Types.ObjectId;
    startTime: string; 
    endTime: string;   
    totalCost: number;
}