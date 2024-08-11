import { Schema, model } from 'mongoose';
import { TCar } from './car.interface';

// Create a schema for the Car model
const carSchema = new Schema<TCar>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  isElectric: { type: Boolean, required: true },
  status: { type: String, default: 'available' },
  features: { type: [String], required: true },
  pricePerHour: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
}, {
  timestamps:true,
  versionKey:false,
  toJSON: {
      transform: function (doc, ret) {
          const reordered = {
              _id: ret._id,
              name: ret.name,
              description: ret.description,
              color: ret.color,
              isElectric: ret.isElectric,
              status: ret.status,
              features: ret.features,
              pricePerHour: ret.pricePerHour,
              isDeleted: ret.isDeleted,
              createdAt: ret.createdAt,
              updatedAt: ret.updatedAt,
          };
          return reordered;
      }
  }
});

// Create and export the Car model
const carModel = model('carModel', carSchema);
export default carModel;
