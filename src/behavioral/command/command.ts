export interface SmartHousCommand {
  execute(): void;
  undo(): void;
}
