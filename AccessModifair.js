'use strict';
var Taxi = /** @class */ (function () {
    function Taxi(location) {
        this.location = location;
        this.getLocation = location;
    }
    Taxi.prototype.travelTo = function (Point) {
        console.log("Taksi X: ".concat(Point.X, " Konumundan ").concat(Point.Y, " Konumuna Gidiyor."));
    };
    return Taxi;
}());
var Taksi_1 = new Taxi({ X: 1, Y: 10 });
Taksi_1.travelTo({ X: 1, Y: 10 });
