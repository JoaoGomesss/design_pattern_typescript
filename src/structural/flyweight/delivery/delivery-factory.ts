import { DeliveryFlyweight } from "./delivery-flyweigth";
import { DeliveryLocation } from "./delivery-location";
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from "./delivery-types";

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, "").toLocaleLowerCase())
      .join("_");
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const id = this.createId(intrinsicState);
    if (id in this.locations) return this.locations[id];
    this.locations[id] = new DeliveryLocation(intrinsicState);
    return this.locations[id];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
