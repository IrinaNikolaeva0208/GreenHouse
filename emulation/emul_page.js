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
