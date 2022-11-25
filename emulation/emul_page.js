$(document).ready(function () {
    $(".toggle").click(function () {
        $(".menu").toggleClass("active");
    });
});

import sensors from "./sensors/index.js";
import plants from "./plants/index.js";
import appliances from "./appliances/index.js";

console.log(sensors);
console.log(plants);
console.log(appliances);

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

function isInRange(rangeOfNumbers, x, y) {
    return rangeOfNumbers.includes(x) && rangeOfNumbers.includes(y);
}

function calculateParameterGrade(plant, applianceArray) {
    const distancesToPlantX = applianceArray.map(
        (app) => app.getAppliancePositionX() - plant.getPlantPositionX()
    );
    const distancesToPlantY = applianceArray.map(
        (app) => app.getAppliancePositionY() - plant.getPlantPositionY()
    );

    let parameterGrade = 0;
    for (
        let distanceNumber = 0;
        distanceNumber < distancesToPlantX.length;
        distanceNumber++
    ) {
        if (
            parameterGrade < 5 &&
            isInRange(
                [0, 1],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        )
            parameterGrade = 5;
        else if (
            parameterGrade < 3 &&
            isInRange(
                [2, 1, 0, -1],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        )
            parameterGrade = 3;
        else if (
            parameterGrade < 1.5 &&
            isInRange(
                [3, 2, 1, 0, -1, -2],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        )
            parameterGrade = 1.5;
    }
    return parameterGrade;
}

function checkConditions() {
    for (let plantNumber = 0; plantNumber < plants.length; plantNumber++) {
        let totalGrade = 0;
        for (let appliance in appliances) {
            totalGrade += calculateParameterGrade(
                plants[plantNumber],
                appliances[appliance]
            );
            if (plantNumber == 28) console.log(appliance);
        }
        plants[plantNumber].setGrowthRate(totalGrade);
        if (plantNumber == 1) console.log(totalGrade);
    }
}

function showParameterValuesOnSensors() {
    for (let sensor in sensors) {
        sensors[sensor].calculateParameterValue();
        let parametersValue = sensor.getParameterValue();
        //pokazat' znachenie na sensore
    }
}

function emulateGreenhouse() {
    checkConditions();
    showParameterValuesOnSensors();
    growPlants();
    //smenit' kolichesvo proydenogo vremeni
    console.log(1);
}

//setInterval(emulateGreenhouse, 1000);
emulateGreenhouse();
