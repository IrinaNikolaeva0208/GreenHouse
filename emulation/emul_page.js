$(document).ready(function () {
    $(".toggle").click(function () {
        $(".menu").toggleClass("active");
    });
});

import sensors from "./sensors/index.js";
import plants from "./plants/index.js";
import appliances from "./appliances/index.js";
import checkConditions from "./emulation_modules/checkConditions.js";
import changeEmulationTime from "./emulation_modules/changeEmulationTime.js";
import growPlants from "./emulation_modules/growPlants.js";

let greenhouseConditions = {
    Humidity: 60,
    Temperature: 10,
    Acidity: 7,
    LightLevel: 300,
};

//Nujno sozdat' bloki na kazdiy pribor, vse pribory hranyatsya v ob'ekte APPLIANCES v formate key(nazvanie): value(massiv etih priborov)
//ne prinadlejat setke/flexu, (position relative ?)
//nuzen takoy ze ob'ekt
//v kazdom pribore est' ego mestopologenie v teplitse, gde (0, 0) - leviy nizniy ugol tseplitsy (zdes' X i Y - uzly setki)

//S datchikami to ze, chto i s priborami, tolko v ob'ekte lezat ne massivy, a prosto po odnomy datchiku dlya kazdogo parametra

//potom na datchiki i pribory nalozhim eventListener, choby ih mozno bylo dvigat'

//sozdat' 4 knopki vkl/vykl dlya kazdogo pribora

function showParameterValuesOnSensors() {
    for (let sensor in sensors) {
        switch (sensor) {
            case "humiditySensor":
                sensors[sensor].calculateParameterValue(
                    appliances.humidlifiers,
                    greenhouseConditions.Humidity
                );
                break;
            case "aciditySensor":
                sensors[sensor].calculateParameterValue(
                    appliances.fertilizerDispensers,
                    greenhouseConditions.Acidity
                );
                break;
            case "temperatureSensor":
                sensors[sensor].calculateParameterValue(
                    appliances.heaters,
                    greenhouseConditions.Temperature
                );
                break;
        }
        let parametersValue = sensors[sensor].getParameterValue();
        //pokazat' znachenie na sensore
    }
}

function emulateGreenhouse() {
    const currentDay = changeEmulationTime(emulateGreenhouse);
    checkConditions(plants, appliances, greenhouseConditions);
    showParameterValuesOnSensors();
    growPlants(currentDay);
}

emulateGreenhouse();
