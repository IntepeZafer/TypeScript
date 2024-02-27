'use strict'

interface Point {
    X: number;
    Y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(Point: Point): void;
}

class Taxi implements Vehicle {
    color : string;
    constructor(location: Point , color?: string) {
        this.currentLocation = location;
        this.color = color;
    }
    currentLocation: Point;
    travelTo(Point: Point): void {
        console.log(`Taksi X: ${Point.X} Konumundan ${Point.Y} Konumuna Gidiyor.`);
    }
}

let Taksi_1: Taxi = new Taxi({ X: 1, Y: 5 });
console.log(Taksi_1.currentLocation);
Taksi_1.travelTo({X : 1 , Y : 10});
let Taksi_2 : Taxi = new Taxi({X : 1 , Y : 10});