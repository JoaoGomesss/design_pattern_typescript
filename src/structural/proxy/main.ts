import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy("Joao", "jowzera");
  console.log(await user.getAddresses());
}

clientCode();
