import Sensor from "./sensor.js";

let sensors = {};
sensors.humiditySensor = new Sensor("Humidity", 3, 3);
sensors.aciditySensor = new Sensor("Acidity", 4, 1);
sensors.temperatureSensor = new Sensor("Temperature", 7, 2);

export default sensors;
