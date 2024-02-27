'use strict'

interface Point{
    X : number;
    Y : number;
}

interface Vehicle{
    getLocation : Point;
    travelTo(Point : Point) : void;
}

class Taxi implements Vehicle{
    constructor(private location ?: Point){
        this.getLocation = location;
    }
    travelTo(Point: Point): void {
        console.log(`Taksi X: ${Point.X} Konumundan ${Point.Y} Konumuna Gidiyor.`);
    }
}
let Taksi_1 : Taxi = new Taxi({X : 1 , Y : 10});
Taksi_1.travelTo({X : 1 , Y : 10});
