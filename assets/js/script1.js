var nombre = prompt("Ingresa tu nombre");/*se solicita el nombre al usuario*/
var Celsius = prompt("Ingrese una temperatura en °C"); /*se solicita al usuario que ingrese una temperatura en grados celcius*/


var Farenheit = parseFloat((Celsius*9/5)+32)
var Kelvin = parseFloat(+Celsius+ 273.15)

document.write(nombre+" "+Celsius+" °C en °F es "+Farenheit+"°F.");
document.write(nombre+" "+Celsius+" °C en °K es "+Kelvin+"°K.");