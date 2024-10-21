import { BikeFactory } from "../factories/bycicle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumber } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bycicleFactory = new BikeFactory();
  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("celta");
  const bycicle = bycicleFactory.getVehicle("bmx");
  const cars = [car1, car2, bycicle];
  return cars[randomNumber(cars.length)];
}
