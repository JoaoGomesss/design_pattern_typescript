import { ProductProtocol } from "./product-protocol";

export class TShirt implements ProductProtocol {
  private name = "camiseta";
  private price = 49.99;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
