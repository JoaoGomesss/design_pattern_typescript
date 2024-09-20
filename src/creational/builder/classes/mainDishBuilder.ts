import { MealBuilderProtocol } from "../interfaces/builder.protocol";
import { MealBox } from "./meal-box";
import { Rice, Beans, Meat, Beverage, Dessert } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 12);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 16);

    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Refri", 7);

    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Pudim", 9);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
