//import table from "./db_init.js";

// const autoPlan = table.find({ culture: localStorage.getItem("culture") });
// delete autoPlan.culture;

const autoPlan = {
    humidity: 75,
    temperature: 15,
    acidity: 7,
    lightLevel: 1000,
};
const userPlan = JSON.parse(localStorage.getItem("userPlan"));
let essentialPlan = Object.assign(userPlan ? userPlan : autoPlan);
export default essentialPlan;
