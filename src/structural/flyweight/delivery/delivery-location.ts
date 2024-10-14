import { DeliveryFlyweight } from "./delivery-flyweigth";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: number): void {
    console.log("Entrega para %s", name);
    console.log("Em", this.intrinsicState.street, this.intrinsicState.city);
    console.log("Número", number);
  }
}
