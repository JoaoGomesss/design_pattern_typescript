import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-factory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle("Puma", "Roberto");
const car2 = individualFactory.createVehicle("Opala", "Jenifer");

car1.pickUp();
car2.pickUp();
