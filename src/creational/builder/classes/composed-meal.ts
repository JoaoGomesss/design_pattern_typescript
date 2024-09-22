import { MealCompositeProtocol } from "../interfaces/meal-compostie-protocol";

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return 1;
  }

  add(meal: MealCompositeProtocol): void {
    this._children.push(meal);
  }
}
