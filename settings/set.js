let set_block = document.querySelector(".settings-block");
let plan_block = document.querySelector(".plan-block");
let plan_dropdown_items = document.querySelectorAll(".plan-dropdown-item");
let plan_dropdown_btn = document.querySelector(".plan-dropdown-btn");

let plant_dropdown_items = document.querySelectorAll(".plant-dropdown-item");
let plant_dropdown_btn = document.querySelector(".plant-dropdown-btn");

let date_input = document.querySelector(".date-input");
let time_input = document.querySelector(".time-input");

let user_plan = {
    humidity: null,
    temperature: null,
    acidity: null,
    light: null,
};

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
    if (!plan_block.classList.contains("hidden")) {
        let parametersValues = document.querySelectorAll(".plan-item-input");
        let i = 0;
        for (let parameter in user_plan) {
            user_plan[parameter] = parametersValues[i].value;
            i++;
        }
        localStorage.setItem("userPlan", JSON.stringify(user_plan));
    }
});
