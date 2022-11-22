let emulationAppliances = {};

emulationAppliances.heaters = []
    .push(new Heater(2, 4))
    .push(new Heater(5, 1))
    .push(new Heater(8, 4));

emulationAppliances.humidlifiers = []
    .push(new Humidlifier(2, 1))
    .push(new Humidlifier(5, 4))
    .push(new Humidlifier(8, 1));

emulationAppliances.lightSources = []
    .push(new LightSource(3, 0))
    .push(new LightSource(7, 0))
    .push(new LightSource(3, 5))
    .push(new LightSource(7, 5));

emulationAppliances.conditioners = []
    .push(new Conditioner(5, 0))
    .push(new Conditioner(5, 5));

emulationAppliances.fertilizerDispensers = []
    .push(new FertilizerDispenser(0, 3))
    .push(new FertilizerDispenser(5, 2))
    .push(new FertilizerDispenser(10, 3));
