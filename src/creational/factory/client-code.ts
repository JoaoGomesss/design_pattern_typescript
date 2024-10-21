import { CarFactory } from "./factories/car-factory";

const car1 = new CarFactory();

const fusca = car1.getVehicle("Fusca");

console.log(fusca);
