'use strict';
var Taxi = /** @class */ (function () {
    function Taxi(location) {
        this.location = location;
    }
    Taxi.prototype.travelTo = function (point) {
        var _a, _b;
        console.log("Taksi ".concat((_a = this.location) === null || _a === void 0 ? void 0 : _a.X, " ve ").concat((_b = this.location) === null || _b === void 0 ? void 0 : _b.Y, " konumundan ").concat(point.X, " ve ").concat(point.Y, " konumuna gidiyor."));
    };
    Taxi.prototype.getLocation = function () {
        if (!this.location) {
            throw new Error("Konum bilgisi bulunamadı");
        }
        return this.location;
    };
    Taxi.prototype.setLocation = function (value) {
        if (value.X < 0 || value.Y < 0) {
            throw new Error("Kordinat bilgileri negatif olamaz");
        }
        this.location = value;
    };
    return Taxi;
}());
var Taksi_1 = new Taxi({ X: 1, Y: 10 });
Taksi_1.travelTo({ X: 1, Y: 10 });
var currentLocation = Taksi_1.getLocation();
Taksi_1.setLocation({ X: 1, Y: 10 });
