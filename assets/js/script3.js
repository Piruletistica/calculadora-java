var nombre = prompt("Ingresa tu nombre");/*se solicita el nombre al usuario*/
var num1 = prompt("Ingrese número 1"); /*se solicita al usuario que ingrese un número*/
var num2 = prompt("Ingrese número 2"); /*se solicita al usuario que ingrese un número*/
var num3 = prompt("Ingrese número 3"); /*se solicita al usuario que ingrese un número*/
var num4 = prompt("Ingrese número 4"); /*se solicita al usuario que ingrese un número*/
var num5 = prompt("Ingrese número 5"); /*se solicita al usuario que ingrese un número*/

var num1 = parseInt(num1);/*se convierte el string a numero entero*/
var num2 = parseInt(num2);/*se convierte el string a numero entero*/
var num3 = parseInt(num3);/*se convierte el string a numero entero*/
var num4 = parseInt(num4);/*se convierte el string a numero entero*/
var num5 = parseInt(num5);/*se convierte el string a numero entero*/
var suma = parseInt(num1+num2+num3+num4+num5);/*se suman los numeros enteros ingresados*/
var promedio = parseInt(suma/5);/*se calcula el promedio de los 5 digitos ingresados*/

document.write(nombre+" la suma de los 5 números ingresados es "+suma+" y el promedio de estos numeros es "+promedio+""); /*se entrega la respuesta matemática a las 2 operaciones realizadas*/

