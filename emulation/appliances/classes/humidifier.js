import Appliance from "./appliance.js";

class Humidlifier extends Appliance {
    #essentialHumidity;

    constructor(humidity, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialHumidity = humidity;
    }

    getEssentialHumidity() {
        return this.#essentialHumidity;
    }
}

export default Humidlifier;
