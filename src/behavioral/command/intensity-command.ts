import { SmartHousCommand } from "./command";
import { SmartHouseLight } from "./smart-house-light";

export class IntensityOfLight implements SmartHousCommand {
  constructor(private readonly intensity: SmartHouseLight) {}

  execute(): void {
    const intensity = this.intensity.increaseIntensity();
    console.log(`${this.intensity.name} aumentou para ${intensity}`);
  }

  undo(): void {
    const intensity = this.intensity.decreaseIntensity();
    console.log(`${this.intensity.name} diminui para ${intensity}`);
  }
}
