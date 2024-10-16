import { SmartHousCommand } from "./command";

export class SmartHouseApp {
  private commands: { [k: string]: SmartHousCommand } = {};

  addCommand(key: string, command: SmartHousCommand): void {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
