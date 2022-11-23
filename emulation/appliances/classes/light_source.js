import Appliance from "./appliance.js";

class LightSource extends Appliance {
    #LightLevel;

    constructor(lightLevel, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#LightLevel = lightLevel;
    }
}

export default LightSource;
