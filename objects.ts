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
class Bus implements Vehicle{
    currentLocation : Point;
    travelTo(Point : Point) : void{
        console.log(`Otobüs X: ${Point.X} Konumundan Y: ${Point.Y} Konumuna Gidiyor`);
    }
} 
let taxi_1 : Taxi = new Taxi;
taxi_1.travelTo({X : 1 , Y : 2});
taxi_1.currentLocation = {X : 1 , Y : 5};
console.log(taxi_1.currentLocation.X);
console.log(taxi_1.currentLocation.Y)

let Bus_1 : Bus = new Bus;
Bus_1.travelTo({X : 1 , Y : 2});