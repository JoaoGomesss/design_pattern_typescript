import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy("Joao", "jowzera");
  console.log(await user.getAddresses());

  console.log("Isso vai se repetir (CACHE)");
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
