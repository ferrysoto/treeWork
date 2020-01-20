
// //logro 2 lo mismo que el logro 1 pero en un ficher js
// //logro 1 printar una alerta y que después muestre bienvenido + nombre
// document.addEventListener("DOMContentLoaded",function(event){
//
//   var person = prompt("Please enter your name", "");
//   document.getElementById("p").innerText = "Bienvenido " + person;
//
// 		});
// //final logro 1


//logro 3 resuelve algoritmos con condicionales no bucles ni funciones, solo condicionales
//escribe programa que insertando nota muestre la nota segun la tabla, funciona
//tener en cuenta numeros negativos

//aprobado



var nota = prompt("inserta la nota", "");
console.log(nota);
if(nota <= "0"){
 document.write("<p>error: inserte una nota positiva<p>");
}else{
  if(nota <= "4"){
    console.log("insuficiente");
    document.write("<p>insuficiente<p>");
  }else if(nota == "5" || nota == "6"){
    console.log("suficiente");
    document.write("<p>suficiente<p>");
  }else if(nota == "7" || nota == "8"){
    console.log("notable");
    document.write("<p>notable<p>");
  }else if(nota == "9" || nota == "10"){
    console.log("excelente");
    document.write("<p>excelente<p>");
  }else{
    document.write("<p>error: inserte una nota numérica sin decimales<p>");
  }
}

//final logro 3




// logros 1 y 3 suspendidos pero resueltos
// ejemplos
// for (i; i <= 99; i++) {
//
// }
//
// n = 0;
// x = 0;
// while (n < 3) {
//   n ++;
//   x += n;
// }


//logro 4 resolver algoritmos sencillos usando bucles

//simula dado de 20 caras y 5 tiradas y guarda en array los pares y pinta el contenido del array
// var pares = [];
// var tiradas = [];
//
// for(var i = 0; i < 5; i++){
//   tirada = Math.floor(Math.random()*20 +1);
//   tiradas += tirada;
//   if(tirada % 2 == 0){
//     pares += tirada + "" + ,;
//   }
//   }
//   document.write("<p>"+pares+"<p>");
//   console.log(pares);
//   console.log(tiradas);




//logro 5
//crea F para saber si un numero es par y otra para primo, usa una pagina que nos diga si es primo o no, o si es par o impar
//
// var number = prompt("enter number", "");
// var numero = parseInt(number)
//
// function primo(numero){
//   for (var i = 2; i < numero; i++) {
//
//     if (numero % i === 0) {
//         document.write("<h1>no es primo</h1>");
//     }else{
//         document.write("<h1>es primo</h1>");
//     }
//
//   }
// }
//
//
//
// function parImpar(numero){
//   if (numero % 2 == 0){
//     document.write("<h1>Par!</h1>");
//   }else{
//     document.write("<h1>senar!</h1>");
//   }
//
// }
//
// document.getElementById("p").innerHTML = parImpar(numero) + " - " + primo(numero);
