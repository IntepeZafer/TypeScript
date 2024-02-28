'use strict';

interface Point {
    X: number;
    Y: number;
}

interface Vehicle {
    getLocation(): Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    private _location?: Point;

    constructor(location?: Point) {
        this._location = location;
    }

    travelTo(point: Point): void {
        console.log(`Taksi ${this._location?.X} ve ${this._location?.Y} konumundan ${point.X} ve ${point.Y} konumuna gidiyor.`);
    }

    get location(): Point {
        if (!this._location) {
            throw new Error("Konum bilgisi bulunamadı");
        }
        return this._location;
    }

    set location(value: Point) {
        if (value.X < 0 || value.Y < 0) {
            throw new Error("Koordinat bilgileri negatif olamaz");
        }
        this._location = value;
    }
}

let Taksi_1: Taxi = new Taxi({ X: 1, Y: 10 });
Taksi_1.travelTo({ X: 1, Y: 10 });
let currentLocation = Taksi_1.location;
Taksi_1.location = { X: 1, Y: 10 };
