import { DeviceImplementation } from "./device-implementation";

export class Tv implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = "TV";

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volumn: number): void {
    if (volumn < 0) return;
    if (volumn > 100) return;

    this.volume = volumn;
  }

  getVolume(): number {
    return this.volume;
  }
}
