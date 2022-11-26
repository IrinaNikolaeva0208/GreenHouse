$(document).ready(function () {
    $(".toggle").click(function () {
        $(".menu").toggleClass("active");
    });
});

import sensors from "./sensors/index.js";
import plants from "./plants/index.js";
import appliances from "./appliances/index.js";
import checkConditions from "./emulation_modules/checkConditions.js";

let greenhouseConditions = {
    Humidity: 60,
    Temperature: 10,
    Acidity: 7,
    LightLevel: 300,
};

// console.log(sensors);
// console.log(plants);
// console.log(appliances);

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

//Nuzno sozdat' blok s nazvaniem rasteniya, datoy starta, i kolichestvom proshedsih sutok i chasov (kak v metode)

function growPlants() {
    for (let plantNumber = 0; plantNumber < plants.length; plantNumber++) {
        plants[plantNumber].getGrowthRate();
        //growthRate - skol'ko procentov sostavlyaet sleduyuschiy razmer rastenia ot tekuschego (min 101, max 120)
        //esli ne ochen' udobnoe znachenie - mogu potom perepisat'
        //zdes' nuzno animirovat' rost (ili prosto yvelichivat' bloki), uchityvaya growthRate
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
        console.log(parametersValue);
        //pokazat' znachenie na sensore
    }
}

function emulateGreenhouse() {
    checkConditions(plants, appliances, greenhouseConditions);
    showParameterValuesOnSensors();
    growPlants();
    //smenit' kolichesvo proydenogo vremeni
}

setInterval(emulateGreenhouse, 1000);
