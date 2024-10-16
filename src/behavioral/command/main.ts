import { IntensityOfLight } from "./intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

const bedroom = new SmartHouseLight("Luz do quarto");
const bathroom = new SmartHouseLight("Luz do banheiro");

const bedroomLightPowerCommand = new LightPowerCommand(bedroom);
const bathroomLightPowerCommand = new LightPowerCommand(bathroom);

const decreaseBedroomLight = new IntensityOfLight(bedroom);

const smarthouseapp = new SmartHouseApp();
smarthouseapp.addCommand("btn-1", bedroomLightPowerCommand);
smarthouseapp.executeCommand("btn-1");

smarthouseapp.addCommand("btn-2", bathroomLightPowerCommand);
smarthouseapp.executeCommand("btn-2");

smarthouseapp.addCommand("btn-3", decreaseBedroomLight);
smarthouseapp.undoCommand("btn-3");
