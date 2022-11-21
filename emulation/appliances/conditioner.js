class Conditioner extends Appliance {
    #essentialTemperature;

    constructor(temperature, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialTemperature = temperature;
    }

    getEssentialTemperature() {
        return this.#essentialTemperature;
    }
}
