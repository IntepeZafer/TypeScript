'use strict';
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (Point) {
        console.log("Taksi X: ".concat(Point.X, " Konumundan Y: ").concat(Point.Y, " Konumuna Gidiyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (Point) {
        console.log("Otob\u00FCs X: ".concat(Point.X, " Konumundan Y: ").concat(Point.Y, " Konumuna Gidiyor"));
    };
    return Bus;
}());
var taxi_1 = new Taxi;
taxi_1.travelTo({ X: 1, Y: 2 });
taxi_1.currentLocation = { X: 1, Y: 5 };
console.log(taxi_1.currentLocation.X);
console.log(taxi_1.currentLocation.Y);
var Bus_1 = new Bus;
Bus_1.travelTo({ X: 1, Y: 2 });
