var nombre = prompt("Ingresa tu nombre");/*Se solicita al usuario ingresar su nombre */
var num1 = prompt("Ingrese el primer número, debe ser mayor a 0"); /*se solicita al usuario que ingrese un numero mayor a 0*/
var num2 = prompt("Ingrese el segundo número, debe ser mayor a 0"); /*Se solicita al usuario que ingrese un numero mayor a 0*/

var suma = parseInt(num1)+parseInt(num2); /*Se ingresa la formula de suma*/
var resta = parseInt(num1)-parseInt(num2);/*Se ingresa la formula de resta*/
var multiplica = parseInt(num1)*parseInt(num2);/*Se ingresa la formula de multiplicacion*/
var divide = parseInt(num1)/parseInt(num2);/*Se ingresa la formula de división*/
var resto = parseInt(num1)%parseInt(num2);/*Se ingresa la formula resto de la división*/

document.write(nombre+" el resultado de sumar "+num1+" + "+num2+" es "+suma+".");/*Se entrega respuesta de la suma*/
document.write(nombre+" el resultado de restar "+num1+" - "+num2+" es "+resta+".");/*Se entrega respuesta de la resta*/
document.write(nombre+" el resultado de multiplicar "+num1+" + "+num2+" es "+multiplica+".");/*Se entrega respuesta de la multiplicacion*/
document.write(nombre+" el resultado de dividir "+num1+" / "+num2+" es "+divide+".");/*Se entrega respuesta de la división*/
document.write(nombre+" el resto al dividir "+num1+" / "+num2+" es "+resto+".");/*Se entrega respuesta de la división*/
