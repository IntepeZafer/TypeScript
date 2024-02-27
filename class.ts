'use strict'

interface Point{
    X : number;
    Y : number;
}
interface Vehicle{
    currentLocation : Point;
    travelTo(Point : Point) : void;
}

class Taxi implements Vehicle{
    currentLocation : Point;
    travelTo(Point : Point) : void{
        console.log(`Taksi X: ${Point.X} Konumundan Y: ${Point.Y} Konumuna Gidiyor`);
    }
}