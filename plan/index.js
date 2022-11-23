import userPlan from "../settings/set.js";

let autoPlan = {
    humidity: 75,
    temperature: 15,
    acidity: 7,
    lightLevel: 900,
};

let essentialPlan = Object.assign(userPlan.humidity ? userPlan : autoPlan);

export default essentialPlan;
