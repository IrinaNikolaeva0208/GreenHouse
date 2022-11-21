class Humidlifier extends Appliance {
    #essentialHumidity;

    constructor(humidity, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#essentialHumidity = humidity;
    }

    getHumidity() {
        return this.#essentialHumidity;
    }
}
