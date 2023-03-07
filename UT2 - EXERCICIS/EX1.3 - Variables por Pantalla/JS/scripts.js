let num1 = 4;
let num2 = 6;
let resultado;

// SUMA
resultado = num1 + num2;
salida = "La suma de " + num1 + " y " + num2 + " es " + resultado;
document.getElementById("result1").innerHTML = salida;

// RESTA
resultado = num1 - num2;
salida = "La resta de " + num1 + " y " + num2 + " es " + resultado;
document.getElementById("result2").innerHTML = salida;

// MULTIPLICACIÓN Y DIVISIÓN --> OBVIO

// INCREMENTO Y DECREMENTO

document.getElementById("result3").innerHTML = 
    "--- INCREMENT ---";
document.getElementById("result4").innerHTML =
    "ABANS: num1 ara val: " + num1;
num1++; 
document.getElementById("result5").innerHTML =
    "ARA: num1 val: " + num1;

document.getElementById("result6").innerHTML =
    "--- DECREMENT ---";
document.getElementById("result7").innerHTML =
    "ABANS: num1 ara val: " + num1;
num1--; 
document.write("ARA: num1 val: " + num1 + "<br>");

// console.log(a);

// document.getElementById("result1").innerHTML = a;
// document.getElementById("result2").innerHTML = b;
// document.getElementById("result3").innerHTML = c;