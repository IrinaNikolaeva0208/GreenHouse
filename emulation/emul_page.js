import appliances from "./appliances/index.js";
import checkConditions from "./emulation_modules/checkConditions.js";
import changeEmulationTime from "./emulation_modules/changeEmulationTime.js";
import growPlants from "./emulation_modules/growPlants.js";
import showParameterValuesOnSensors from "./emulation_modules/showParameterValuesOnSensors.js";

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
    else if ($(this).hasClass("humidlifier-btn"))
        for (let humidlifier of appliances.humidlifiers)
            humidlifier.getState()
                ? humidlifier.switchOff()
                : humidlifier.switchOn();
    else if ($(this).hasClass("light-btn"))
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

let container = document.querySelector(".inv");
for (let applianceArray in appliances) {
    for (let appliance of appliances[applianceArray]) {
        console.log(appliances, appliances[applianceArray], appliance);
        const applianceBlock = document.createElement("div");
        applianceBlock.setAttribute(
            "style",
            `position:absolute;top:${
                (5 - appliance.getPositionY()) * 100 - 8
            }px;left:${
                appliance.getPositionX() * 120 - 1
            }px;width:40px;height:40px;background:url(../assets/icons/${applianceArray}.png);background-size:cover;`
        );
        container.prepend(applianceBlock);
    }
}

//Nujno sozdat' bloki na kazdiy pribor, vse pribory hranyatsya v ob'ekte APPLIANCES v formate key(nazvanie): value(massiv etih priborov)
//ne prinadlejat setke/flexu, (position relative ?)
//nuzen takoy ze ob'ekt
//v kazdom pribore est' ego mestopologenie v teplitse, gde (0, 0) - leviy nizniy ugol tseplitsy (zdes' X i Y - uzly setki)

//S datchikami to ze, chto i s priborami, tolko v ob'ekte lezat ne massivy, a prosto po odnomy datchiku dlya kazdogo parametra

//potom na datchiki i pribory nalozhim eventListener, choby ih mozno bylo dvigat'

function emulateGreenhouse() {
    const currentDay = changeEmulationTime(emulateGreenhouse);
    checkConditions();
    showParameterValuesOnSensors();
    growPlants(currentDay);
}

emulateGreenhouse();
