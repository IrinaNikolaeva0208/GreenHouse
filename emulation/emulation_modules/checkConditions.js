import calculateParameterGrade from "./calculateParameterGrade.js";

export default function checkConditions(
    plants,
    appliances,
    greenhouseConditions
) {
    for (let plantNumber = 0; plantNumber < plants.length; plantNumber++) {
        let totalGrade = 0;
        for (let appliance in appliances) {
            let parameter;
            for (let param in greenhouseConditions) {
                if (appliances[appliance][0]["getEssential" + param])
                    parameter = param;
            }
            totalGrade += calculateParameterGrade(
                plants[plantNumber],
                appliances[appliance],
                greenhouseConditions,
                parameter
            );
        }
        plants[plantNumber].setGrowthRate(totalGrade);
    }
}
