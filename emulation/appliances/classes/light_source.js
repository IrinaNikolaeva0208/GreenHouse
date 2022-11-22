class LightSource extends Appliance {
    #LightLevel;

    constructor(lightLevel, appliancePositioX, appliancePositionY) {
        super(appliancePositioX, appliancePositionY);
        this.#LightLevel = lightLevel;
    }
}
