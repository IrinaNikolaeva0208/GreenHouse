class Plant {
    #growthRate;
    #plantPositionX;
    #plantPositionY;

    constructor(plantPositionX, plantPositionY) {
        this.#plantPositionX = plantPositionX;
        this.#plantPositionY = plantPositionY;
    }

    setGrowthRate(totalGrade) {
        this.#growthRate = 100 + 20 * totalGrade;
    }

    getGrowthRate() {
        return this.#growthRate;
    }

    getPlantPositionX() {
        return this.#plantPositionX;
    }

    getPlantPositionY() {
        return this.#plantPositionY;
    }
}

export default Plant;
