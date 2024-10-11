import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: "Av. Cunha", number: 120 },
          { street: "Av. Reis", number: 121 },
        ]);
      }, 2000);
    });
  }
}
