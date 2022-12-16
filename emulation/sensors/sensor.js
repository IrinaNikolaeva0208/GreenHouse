import getProperParameterValue from "../emulation_modules/getProperParameterValue.js";

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

    calculateParameterValue(parameterAppliances, parameterGreenhouseCondition) {
        let distanceToClosestAppliance = 20;
        for (let parameterAppliance of parameterAppliances) {
            let distanceToApplianceX = Math.abs(
                parameterAppliance.getPositionX() - this.#sensorPositionX
            );
            let distanceToApplianceY = Math.abs(
                parameterAppliance.getPositionY() - this.#sensorPositionY
            );

            let maxDistanceToAppliance =
                distanceToApplianceX > distanceToApplianceY
                    ? distanceToApplianceX
                    : distanceToApplianceY;
            if (maxDistanceToAppliance < distanceToClosestAppliance)
                distanceToClosestAppliance = maxDistanceToAppliance;
        }

        switch (distanceToClosestAppliance) {
            case 1:
                this.#parameterValue = getProperParameterValue(
                    parameterGreenhouseCondition,
                    this.#parameter,
                    parameterAppliances,
                    0.8
                );
                break;
            case 2:
                this.#parameterValue = getProperParameterValue(
                    parameterGreenhouseCondition,
                    this.#parameter,
                    parameterAppliances,
                    0.5
                );
                break;
            case 3:
                this.#parameterValue = getProperParameterValue(
                    parameterGreenhouseCondition,
                    this.#parameter,
                    parameterAppliances,
                    0.2
                );
            default:
                this.#parameterValue = parameterGreenhouseCondition;
        }
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

    getPositionX() {
        return this.#sensorPositionX;
    }

    getPositionY() {
        return this.#sensorPositionY;
    }
}

export default Sensor;
