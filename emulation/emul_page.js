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

let greenhouseConditions = {
    Humidity: 60,
    Temperature: 10,
    Acidity: 7,
    LightLevel: 300,
};

//Nujno sozdat' setku/flexbox v teplitse 10x5 pod rasteniya i v kazdom bloke sdelat' fonom ochen' malen'kuyu ikonky rasteniya
//Rasteniya hranyatsya v massive PLANTS
//nuzen massiv blokov
//v kazdom rastenii propisano ego mestopolozenie v teplitse, gde (0, 0) - leviy nizniy ugol setki (zdes' X i Y - nomer bloka setki)
//nomer bloka v massive dolzen sootvetstvovat' nomeru ego rastenia v massive rasteniy
//mozno v html, mozno zdes'

//Nujno sozdat' bloki na kazdiy pribor, vse pribory hranyatsya v ob'ekte APPLIANCES v formate key(nazvanie): value(massiv etih priborov)
//ne prinadlejat setke/flexu, (position relative ?)
//nuzen takoy ze ob'ekt
//v kazdom pribore est' ego mestopologenie v teplitse, gde (0, 0) - leviy nizniy ugol tseplitsy (zdes' X i Y - uzly setki)

//S datchikami to ze, chto i s priborami, tolko v ob'ekte lezat ne massivy, a prosto po odnomy datchiku dlya kazdogo parametra

//potom na datchiki i pribory nalozhim eventListener, choby ih mozno bylo dvigat'

//sozdat' 4 knopki vkl/vykl dlya kazdogo pribora

const plantsBlocksArray = [];
let tempPLantArray = [];
for (let plant of document.querySelectorAll(".row img")) {
    tempPLantArray.push(plant);
    if (tempPLantArray.length == 10) {
        plantsBlocksArray.unshift(...tempPLantArray);
        tempPLantArray = [];
    }
}
plantsBlocksArray.forEach((plant) => plant.setAttribute("width", "5px"));
const col_width = document.querySelector(".col").offsetWidth;

growPlants.growingDay = 6;
function growPlants(currentDay) {
    if (currentDay == 7)
        plantsBlocksArray.forEach((plantBlock) =>
            plantBlock.setAttribute("style", "visibility:visible")
        );
    if (currentDay >= 7 && currentDay != growPlants.growingDay) {
        growPlants.growingDay = currentDay;
        for (let plantNumber = 0; plantNumber < plants.length; plantNumber++) {
            const plantBlockWidth = +plantsBlocksArray[plantNumber]
                .getAttribute("width")
                .slice(0, -2);
            if (plantBlockWidth < 81) {
                let plantGrowthRate = plants[plantNumber].getGrowthRate();

                plantsBlocksArray[plantNumber].setAttribute(
                    "width",
                    `${plantBlockWidth + plantGrowthRate}px`
                );
            }
        }
    }
}

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
