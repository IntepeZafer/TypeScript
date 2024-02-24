'use strict'

let a : string = "5";
let b : number = 5;
let c : boolean = true;
let d : any;
let e : number[] = [1 , 2 , 3];
let f : Array<number> = [1 , 2 , 3];
let g : Array<any> = [1 , "1"];
let h : [string , number , boolean] = ["1" , 1 , true];

const paymentCrid = 0;
const havaleEft = 1;
const eftPayment = 2;
enum Peyment {paymentCrid = 0 , havaleEft = 1 , eftPayment = 2};
let kredi = Peyment.paymentCrid;
let havale = Peyment.havaleEft;
let Eft = Peyment.havaleEft;