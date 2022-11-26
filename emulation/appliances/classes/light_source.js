import Appliance from "./appliance.js";

class LightSource extends Appliance {
    #essentialLightLevel;

    constructor(lightLevel, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialLightLevel = lightLevel;
    }

    getEssentialLightLevel() {
        return this.#essentialLightLevel;
    }
}

export default LightSource;
