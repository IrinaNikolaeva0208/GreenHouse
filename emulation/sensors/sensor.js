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

        switch (distanceToClosestAppliance) {
            case 1:
                if (
                    parameterGreenhouseCondition >
                    parameterAppliances[0]["getEssential" + this.#parameter]()
                )
                    this.#parameterValue = +(
                        (parameterGreenhouseCondition -
                            parameterAppliances[0][
                                "getEssential" + this.#parameter
                            ]()) *
                            0.8 +
                        parameterAppliances[0][
                            "getEssential" + this.#parameter
                        ]()
                    ).toFixed(1);
                else
                    this.#parameterValue = +(
                        (parameterAppliances[0][
                            "getEssential" + this.#parameter
                        ]() -
                            parameterGreenhouseCondition) *
                            0.8 +
                        parameterGreenhouseCondition
                    ).toFixed(1);
                break;
            case 2:
                if (
                    parameterGreenhouseCondition >
                    parameterAppliances[0]["getEssential" + this.#parameter]()
                )
                    this.#parameterValue = +(
                        (parameterGreenhouseCondition -
                            parameterAppliances[0][
                                "getEssential" + this.#parameter
                            ]()) *
                            0.5 +
                        parameterAppliances[0][
                            "getEssential" + this.#parameter
                        ]()
                    ).toFixed(1);
                else
                    this.#parameterValue = +(
                        (parameterAppliances[0][
                            "getEssential" + this.#parameter
                        ]() -
                            parameterGreenhouseCondition) *
                            0.5 +
                        parameterGreenhouseCondition
                    ).toFixed(1);
                break;
            case 3:
                if (
                    parameterGreenhouseCondition >
                    parameterAppliances[0]["getEssential" + this.#parameter]()
                )
                    this.#parameterValue = +(
                        (parameterGreenhouseCondition -
                            parameterAppliances[0][
                                "getEssential" + this.#parameter
                            ]()) *
                            0.2 +
                        parameterAppliances[0][
                            "getEssential" + this.#parameter
                        ]()
                    ).toFixed(1);
                else
                    this.#parameterValue = +(
                        (parameterAppliances[0][
                            "getEssential" + this.#parameter
                        ]() -
                            parameterGreenhouseCondition) *
                            0.2 +
                        parameterGreenhouseCondition
                    ).toFixed(1);
                break;
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
}

export default Sensor;
