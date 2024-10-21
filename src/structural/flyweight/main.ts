import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();

deliveryContext(factory, "Jow", 120, "Av. Euclydes da Cunha", "Salvador");
deliveryContext(factory, "Hanna", 120, "Av. Euclydes da Cunha", "Salvador");
deliveryContext(factory, "Sonia", 160, "Av. Euclydes da Cunha", "Salvador");
deliveryContext(factory, "Fernanda", 160, "Rua da Paz", "Salvador");

console.log();
console.log(factory.getLocations());
