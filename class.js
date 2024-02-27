'use strict';
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (Point) {
        console.log("Taksi X: ".concat(Point.X, " Konumundan Y: ").concat(Point.Y, " Konumuna Gidiyor"));
    };
    return Taxi;
}());
