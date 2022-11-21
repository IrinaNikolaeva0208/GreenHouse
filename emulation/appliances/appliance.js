class Appliance {
    _appliancePositionX;
    _appliancePositionY;
    _isSwitchedOn = true;

    constructor(appliancePositionX, appliancePositionY) {
        this._appliancePositionX = appliancePositionX;
        this._appliancePositionY = appliancePositionY;
    }

    getXOfPosition() {
        return this._appliancePositionX;
    }

    getYOfPosition() {
        return this._appliancePositionY;
    }

    switchOn() {
        this._isSwitchedOn = true;
    }

    switchOf() {
        this._isSwitchedOn = false;
    }

    changePosition(direction) {
        switch (direction) {
            case "down":
                this._appliancePositionY -= 1;
                break;

            case "up":
                this._appliancePositionY += 1;
                break;

            case "left":
                this._appliancePositionX -= 1;
                break;

            case "right":
                this._appliancePositionX += 1;
                break;
        }
    }
}
