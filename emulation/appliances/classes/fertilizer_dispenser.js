import Appliance from "./appliance.js";

class FertilizerDispenser extends Appliance {
    #essentialAcidity;

    constructor(acidity, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialAcidity = acidity;
    }

    getEssentialAcidity() {
        return this.#essentialAcidity;
    }
}

export default FertilizerDispenser;
