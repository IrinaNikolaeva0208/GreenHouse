class Plant {
    #growthRate;
    #plantPositionX;
    #plantPositionY;

    constructor(plantPositionX, plantPositionY) {
        this.#plantPositionX = plantPositionX;
        this.#plantPositionY = plantPositionY;
    }

    calculateGrowthRate(totalGrade) {
        this.#growthRate = 100 * totalGrade;
    }

    getGrowthRate() {
        return this.#growthRate;
    }
}
