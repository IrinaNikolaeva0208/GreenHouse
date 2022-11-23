class Plant {
    #growthRate;
    #plantPositionX;
    #plantPositionY;

    constructor(plantPositionX, plantPositionY) {
        this.#plantPositionX = plantPositionX;
        this.#plantPositionY = plantPositionY;
    }

    setGrowthRate(totalGrade) {
        this.#growthRate = 100 * totalGrade;
    }

    getGrowthRate() {
        return this.#growthRate;
    }
}

export default Plant;
