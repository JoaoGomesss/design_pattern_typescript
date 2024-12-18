import { SmartHousCommand } from "./command";
import { SmartHouseLight } from "./smart-house-light";

export class LightPowerCommand implements SmartHousCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
