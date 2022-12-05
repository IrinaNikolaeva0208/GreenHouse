import Appliance from "./appliance.js";
import greenhouseConditions from "../../emulation_modules/greenhouseConditions.js";

class Heater extends Appliance {
    #essentialTemperature;

    constructor(temperature, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialTemperature = temperature;
    }

    getEssentialTemperature() {
        return this._isSwitchedOn
            ? this.#essentialTemperature
            : greenhouseConditions.Temperature;
    }
}

export default Heater;
