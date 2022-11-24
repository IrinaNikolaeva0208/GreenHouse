const autoPlan = {
    humidity: 75,
    temperature: 15,
    acidity: 7,
    lightLevel: 900,
};
const userPlan = JSON.parse(localStorage.getItem("userPlan"));
let essentialPlan = Object.assign(userPlan ? userPlan : autoPlan);

export default essentialPlan;
