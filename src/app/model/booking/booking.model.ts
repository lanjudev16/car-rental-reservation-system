import mongoose, { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
    date: { 
        type: Date, 
        required: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'userModel', 
        required: true 
    },
    car: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'carModel', 
        required: true 
    },
    startTime: { 
        type: String, 
        required: true 
    },
    endTime: { 
        type: String, 
        default:null
    },
    totalCost: { 
        type: Number, 
        default: 0 
    },
  });
  const bookingModel=model('bookingModel',bookingSchema)
  export default bookingModel;