import sensors from "./sensors/index.js";
import appliances from "./appliances/index.js";
import checkConditions from "./emulation_modules/checkConditions.js";
import changeEmulationTime from "./emulation_modules/changeEmulationTime.js";
import growPlants from "./emulation_modules/growPlants.js";
import greenhouseConditions from "./emulation_modules/greenhouseConditions.js";

$(document).ready(function () {
    $(".toggle").click(function () {
        $(".menu").toggleClass("active");
    });
});
$(".switch-btn").click(function () {
    $(this).toggleClass("switch-on");
    if ($(this).hasClass("switch-on")) {
        $(this).trigger("on.switch");
    } else {
        $(this).trigger("off.switch");
    }
    if ($(this).hasClass("heater-btn"))
        for (let heater of appliances.heaters)
            heater.getState() ? heater.switchOff() : heater.switchOn();
    if ($(this).hasClass("humidlifier-btn"))
        for (let humidlifier of appliances.humidlifiers)
            humidlifier.getState()
                ? humidlifier.switchOff()
                : humidlifier.switchOn();
    if ($(this).hasClass("light-btn"))
        for (let lightSource of appliances.lightSources)
            lightSource.getState()
                ? lightSource.switchOff()
                : lightSource.switchOn();
    else
        for (let fertilizerDispenser of appliances.fertilizerDispensers)
            fertilizerDispenser.getState()
                ? fertilizerDispenser.switchOff()
                : fertilizerDispenser.switchOn();
});

//Nujno sozdat' bloki na kazdiy pribor, vse pribory hranyatsya v ob'ekte APPLIANCES v formate key(nazvanie): value(massiv etih priborov)
//ne prinadlejat setke/flexu, (position relative ?)
//nuzen takoy ze ob'ekt
//v kazdom pribore est' ego mestopologenie v teplitse, gde (0, 0) - leviy nizniy ugol tseplitsy (zdes' X i Y - uzly setki)

//S datchikami to ze, chto i s priborami, tolko v ob'ekte lezat ne massivy, a prosto po odnomy datchiku dlya kazdogo parametra

//potom na datchiki i pribory nalozhim eventListener, choby ih mozno bylo dvigat'

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
    checkConditions();
    showParameterValuesOnSensors();
    growPlants(currentDay);
}

emulateGreenhouse();
