function isInRange(rangeOfNumbers, x, y) {
    return rangeOfNumbers.includes(x) && rangeOfNumbers.includes(y);
}

export default function calculateParameterGrade(
    plant,
    applianceArray,
    greenhouseConditions,
    parameter
) {
    const distancesToPlantX = applianceArray.map(
        (app) => app.getAppliancePositionX() - plant.getPlantPositionX()
    );
    const distancesToPlantY = applianceArray.map(
        (app) => app.getAppliancePositionY() - plant.getPlantPositionY()
    );

    let parameterCoefficient = greenhouseConditions[parameter];
    let parameterGrade = 0;
    for (
        let distanceNumber = 0;
        distanceNumber < distancesToPlantX.length;
        distanceNumber++
    ) {
        if (
            parameterGrade < 3 &&
            isInRange(
                [0, 1],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        ) {
            if (
                greenhouseConditions[parameter] >
                applianceArray[0]["getEssential" + parameter]()
            )
                parameterCoefficient = +(
                    (greenhouseConditions[parameter] -
                        applianceArray[0]["getEssential" + parameter]()) *
                        0.8 +
                    applianceArray[0]["getEssential" + parameter]()
                ).toFixed(1);
            else
                parameterCoefficient = +(
                    (applianceArray[0]["getEssential" + parameter]() -
                        greenhouseConditions[parameter]) *
                        0.8 +
                    greenhouseConditions[parameter]
                ).toFixed(1);
            parameterCoefficient /=
                applianceArray[0]["getEssential" + parameter]();
            parameterGrade = 3;
        } else if (
            parameterGrade < 2 &&
            isInRange(
                [2, 1, 0, -1],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        ) {
            if (
                greenhouseConditions[parameter] >
                applianceArray[0]["getEssential" + parameter]()
            )
                parameterCoefficient = +(
                    (greenhouseConditions[parameter] -
                        applianceArray[0]["getEssential" + parameter]()) *
                        0.5 +
                    applianceArray[0]["getEssential" + parameter]()
                ).toFixed(1);
            else
                parameterCoefficient = +(
                    (applianceArray[0]["getEssential" + parameter]() -
                        greenhouseConditions[parameter]) *
                        0.5 +
                    greenhouseConditions[parameter]
                ).toFixed(1);
            parameterCoefficient /=
                applianceArray[0]["getEssential" + parameter]();
            parameterGrade = 2;
        } else if (
            parameterGrade < 1 &&
            isInRange(
                [3, 2, 1, 0, -1, -2],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        ) {
            if (
                greenhouseConditions[parameter] >
                applianceArray[0]["getEssential" + parameter]()
            )
                parameterCoefficient = +(
                    (greenhouseConditions[parameter] -
                        applianceArray[0]["getEssential" + parameter]()) *
                        0.8 +
                    applianceArray[0]["getEssential" + parameter]()
                ).toFixed(1);
            else
                parameterCoefficient = +(
                    (applianceArray[0]["getEssential" + parameter]() -
                        greenhouseConditions[parameter]) *
                        0.8 +
                    greenhouseConditions[parameter]
                ).toFixed(1);
            parameterCoefficient /=
                applianceArray[0]["getEssential" + parameter]();
            parameterGrade = 1;
        }
    }

    return parameterCoefficient == greenhouseConditions[parameter]
        ? 1
        : parameterCoefficient;
}
