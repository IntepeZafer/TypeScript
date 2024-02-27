'use strict'

interface Point{
    X : number,
    Y : number
}
interface Passenger{
    name : string;
    phoneNumber : string;

}
interface Vecihele{
    currentLocation : Point;
    trevelTo(Point : Point) : void;
    getDistance(pointA : Point , pointB : Point) : number;
    addPassenger(passenger : Passenger) : void;
}
