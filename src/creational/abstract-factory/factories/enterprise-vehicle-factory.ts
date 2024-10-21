import { Customer } from "../customer/customer";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpriseVehicle } from "../vehicle/enterprise-vehicle";
import { Vehicle } from "../vehicle/vehicle";

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);

    return new EnterpriseVehicle(vehicleName, customer);
  }
}
