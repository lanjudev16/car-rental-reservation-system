import { TCar } from "./car.interface";
import carModel from "./car.model";

const createCar = async (payLoad:TCar) :Promise<TCar>=> {
    const result=await carModel.create(payLoad)
    return result;
};
export const carService={
    createCar
}