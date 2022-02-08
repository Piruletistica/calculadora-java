var nombre = prompt("Ingresa tu nombre");/*se solicita el nombre al usuario*/
var inicio = prompt("Ingrese una cantidad de días"); /*se solicita al usuario que ingrese una cantidad de días*/

var Anio = parseInt(inicio/365);/*calculo de un año a partir de los días ingresados*/
var Semana = parseInt((inicio%365)/7);/*calculo de una semana a partir del resto de la división anterior*/
var Dias = parseInt(Semana%7);/*calculo de días a partir del resto de la división anterior*/

document.write(nombre+" "+inicio+" días equivalen a "+Anio+" año(s), "+Semana+", semana(s) y "+Dias+" días(s)");

