'use strict';
function Toplam() {
    var Sayi = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Sayi[_i] = arguments[_i];
    }
    var Total = 0;
    for (var _a = 0, Sayi_1 = Sayi; _a < Sayi_1.length; _a++) {
        var i = Sayi_1[_a];
        Total += i;
    }
    return "Toplam: " + Total;
}
console.log(Toplam(10, 20));
