class Sensor {
    #parameter;
    #parameterValue;
    #sensorPositionX;
    #sensorPositionY;

    constructor(parameter, sensorPositionX, sensorPositionY) {
        this.#parameter = parameter;
        this.#sensorPositionX = sensorPositionX;
        this.#sensorPositionY = sensorPositionY;
    }

    getParameter() {
        return this.#parameter;
    }

    getParameterValue() {
        return this.#parameterValue;
    }

    calculateParameterValue(parameterAppliances) {
        let distanceToClosestAppliance = 20;
        for (let parameterAppliance of parameterAppliances) {
            let distanceToApplianceX = Math.abs(
                parameterAppliance.getAppliancePositionX() -
                    this.#sensorPositionX
            );
            let distancetoApplianceY = Math.abs(
                parameterAppliance.getAppliancePositionY() -
                    this.#sensorPositionY
            );
            let maxDistanceToAppliance =
                distanceToApplianceX > distancetoApplianceY
                    ? distanceToApplianceX
                    : distancetoApplianceY;
            if (maxDistanceToAppliance < distanceToClosestAppliance)
                distanceToClosestAppliance = maxDistanceToAppliance;
        }
        this.#parameterValue =
            maxDistanceToAppliance < 4
                ? parameterAppliances[0]["getEssential" + this.#parameter]
                : 0;
    }

    changePosition(direction) {
        switch (direction) {
            case "down":
                this.#sensorPositionY -= 1;
                break;

            case "up":
                this.#sensorPositionY += 1;
                break;

            case "left":
                this.#sensorPositionY -= 1;
                break;

            case "right":
                this.#sensorPositionY += 1;
                break;
        }
    }
}
