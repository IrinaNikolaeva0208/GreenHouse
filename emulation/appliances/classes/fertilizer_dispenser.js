import Appliance from "./appliance.js";
import greenhouseConditions from "../../emulation_modules/greenhouseConditions.js";

class FertilizerDispenser extends Appliance {
    #essentialAcidity;

    constructor(acidity, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialAcidity = acidity;
    }

    getEssentialAcidity() {
        return this._isSwitchedOn
            ? this.#essentialAcidity
            : greenhouseConditions.Acidity;
    }
}

export default FertilizerDispenser;
