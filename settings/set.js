let set_block = document.querySelector(".settings-block");
let plan_block = document.querySelector(".plan-block");
let plan_dropdown_items = document.querySelectorAll(".plan-dropdown-item");
let plan_dropdown_btn = document.querySelector(".plan-dropdown-btn");
let plant_dropdown = document.querySelector(".plant-dropdown .dropdown-menu");

let plant_dropdown_btn = document.querySelector(".plant-dropdown-btn");

let date_input = document.querySelector(".date-input");
let time_input = document.querySelector(".time-input");

const result = await fetch("http://localhost:8000/plan_db/");
let planList = await result.json();
const cultureList = planList.map((item) => item.culture).sort();
for (let culture of cultureList) {
    const plantA = document.createElement("a");
    plantA.textContent = culture;
    const plantLi = document.createElement("li");
    plantA.setAttribute("class", "dropdown-item plant-dropdown-item");
    plantLi.appendChild(plantA);
    plant_dropdown.appendChild(plantLi);
}
plant_dropdown_btn.textContent = cultureList[0];

let plant_dropdown_items = document.querySelectorAll(".plant-dropdown-item");
for (let item of plant_dropdown_items)
    item.addEventListener("click", () => {
        plant_dropdown_btn.textContent = item.textContent;
    });

for (let item of plan_dropdown_items)
    item.addEventListener("click", () => {
        plan_dropdown_btn.textContent = item.textContent;
        if (item.textContent == "Auto") {
            plan_block.classList.add("hidden");
            set_block.classList.remove("wide-block");
        } else {
            plan_block.classList.remove("hidden");
            set_block.classList.add("wide-block");
        }
    });

document.querySelector(".btn-start").addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem("culture", plant_dropdown_btn.textContent);
    localStorage.setItem("startDate", date_input.value);
    localStorage.setItem("startTime", time_input.value);
    let plan = {
        humidity: null,
        acidity: null,
        temperature: null,
        lightLevel: null,
    };
    if (!plan_block.classList.contains("hidden")) {
        let parametersValues = document.querySelectorAll(".plan-item-input");
        let i = 0;
        for (let parameter in plan) {
            plan[parameter] = parametersValues[i].value;
            i++;
        }
        localStorage.setItem("Plan", JSON.stringify(plan));
    } else {
        plan = planList.find(
            (plan) => plan.culture == localStorage.getItem("culture")
        );
        delete plan._id;
        delete plan.culture;
        localStorage.setItem("Plan", JSON.stringify(plan));
    }
});
