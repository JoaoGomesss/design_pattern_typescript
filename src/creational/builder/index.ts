import { MainDishBuilder } from "./classes/mainDishBuilder";

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();

console.log(meal2);
