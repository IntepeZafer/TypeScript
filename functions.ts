'use strict'

function Toplam(...Sayi : number[]) : string {
    let Total = 0;
    for(let i of Sayi){
        Total+=i;
    }
    return "Toplam: " + Total;
}
console.log(Toplam(10 , 20));