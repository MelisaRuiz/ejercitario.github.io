//Variable numero y asígnale un valor de tipo number//
let numero = 123;

//Variable texto y asígnale un valor de tipo string//
let texto = "123";

//Variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera//
let verdadero = true;

//Variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa//
let falso = false;

//Variable nulo y asígnale un valor de tipo null//
let nulo = null;

//Variable indefinido y asígnale un valor de tipo undefined//
let indefinido = undefined; 

//Variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos//
let array = [123, "123", false, undefined]; 

//Imprime en la consola el valor de la variable número y el tipo de dato que almacena//
console.log(numero);
console.log(typeof number);

//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena//
console.log(texto);
console.log(typeof string); 

//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena//
console.log(verdadero);
console.log(typeof boolean);

//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena//
console.log(falso);
console.log(typeof boolean);

//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena//
console.log(nulo);
console.log(typeof null);

//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena//
console.log(indefinido);
console.log(typeof undefined); 

//Tomar un número como entrada y mostrar un mensaje en la consola indicando si es mayor, menor o igual a 10//
let num = prompt("Ingrese un número:");
  if (isNaN(num)) {
    console.log("ERROR");
    } 
  else if (num > 10) {
    console.log("El número es mayor que 10");
    } 
  else if (num < 10) {
    console.log("El número es menor que 10");
    } 
  else {
    console.log("El número es igual a 10");
    }


//Programa que solicite al usuario que ingrese un número y verificar si es par o impar//
let numInput = prompt("Ingresar número:");
  if (isNaN(numInput)) {
    console.log("ERROR");
    } 
  else if (numInput % 2 === 0) {
    console.log("Es par");
    } 
  else {
    console.log("Es impar");
    }

//Programa que solicite al usuario que ingrese una letra y verificar si es una vocal o una consonante//
let lInput = prompt("Ingresar letra:");
let l = lInput.toLowerCase();
  if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
    console.log("Es vocal");
  } 
  if (l === "b" || l === "c" || l === "d" || l === "f" || l === "g" || l === "h" || l === "j" || l === "k" || l === "l" || l === "m"
  || l === "ñ" || l === "p" || l === "q" || l === "r" || l === "s" || l === "t" || l === "v" || l === "w" || l === "x" || l === "y" || l === "z"
  ){
  console.log("Es consonante");
  }
  else {
    console.log("ERROR");
  }

//Programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad//
let edadInput= prompt("Ingresa tu edad:");
let edad= parseInt(edadInput);
if (edad >= 18){
  console.log("Es mayor de edad");
  }  
if (edad <= 18){
  console.log("Es menor de edad");
  }
else {
    console.log("ERROR");
  }

//Programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente//
let nmInput= prompt("Ingresa un número del 1 al 7");
let day= parseInt(nmInput);
switch (day){
  case 1:
    console.log("Es Lunes");
    break;
  case 2:
    console.log("Es Martes");
    break;
  case 3:
    console.log("Es Miércoles");
    break;
  case 4:
    console.log("Es Jueves");
    break;
  case 5:
    console.log("Es Viernes");
    break;
  case 6:
    console.log("Es Sábado");
    break;
  case 7:
    console.log("Es Domingo");
    break;
  default:
    console.log("ERROR");
}


// Función que toma dos números como argumentos y devuelve su suma
function suma(x, y) {
  return x + y;
}

// Función que toma un número como argumento y devuelve true si es par o false si es impar
function par(numero) {
  return numero % 2 === 0;
}

// Función que toma un array de números como argumento y devuelve la suma de sus elementos
function sumaArray(r) {
  let sum = 0;
  for (let i = 0; i < r.length; i++) {
    sum += r[i];
  }
  return sum;
}

// Función que toma un array de strings como argumento y devuelve la longitud del string más largo
function longitud(r) {
  let maxima = 0;
  for (let i = 0; i < r.length; i++) {
    if (r[i].length > maxima) {
      maxima = r[i].length;
    }
  }
  return maxima;
}

// Función que toma un objeto como argumento y devuelve un array con los valores de todas sus propiedades
function Propiedades(o) {
  let list = [];
  for (let dato in o) {
    if (o.hasOwnProperty(dato)) {
      list.push(o[dato]);
    }
  }
  return list;
}

// Función que toma un array de números como argumento y devuelve el número más grande
function Mas(r) {
  let max = r[0];
  for (let i = 1; i < r.length; i++) {
    if (r[i] > max) {
      max = r[i];
    }
  }
  return max;
}

// Función que toma un array de números como argumento y devuelve un array con los números ordenados de menor a mayor
function ordenar(ar) {
  return ar.slice().sort((x, y) => x - y);
}

// Función que toma dos arrays como argumentos y devuelve un array que contenga los elementos comunes entre ambos
function comun(aro, ar) {
  return aro.filter(element => ar.includes(element));
}

// Función que toma un array de strings como argumento y devuelve un nuevo array que contenga los strings convertidos a mayúsculas
function nv(ar) {
  return ar.map(str => str.toUpperCase());
}

// Función que toma un array de números como argumento y devuelve un nuevo array que contenga la suma acumulativa de sus elementos
function sum(ar) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
    result.push(sum);
  }
  return result;
}

// Escribe un bucle for que imprima en la consola los números del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Escribe un bucle while que imprima en la consola los números del 1 al 5
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Crea un vector con los números del 1 al 5
const vector = [1, 2, 3, 4, 5];

// Escribe un bucle for que imprima en la consola cada uno de los elementos del vector
for (let i = 0; i < vector.length; i++) {
  console.log(vector[i]);
}

// Crea una función que reciba un vector y devuelva la suma de todos sus elementos
function sumaVector(vector) {
  let sum = 0;
  for (let i = 0; i < vector.length; i++) {
    sum += vector[i];
  }
  return sum;
}

// Prueba la función con un número, por ejemplo, 5.
console.log("La suma de los números del 1 al 5 es: " + sumaVector([1, 2, 3, 4, 5]));

// Prueba la función con tu vector.
console.log("La suma de los elementos del vector es: " + sumaVector(vector));

// Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón//
const boton = document.getElementById('Boton');
const div = document.getElementById('Div');
boton.addEventListener('click', function() {
  div.textContent = 'Mensaje';
});

// Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior//
div.addEventListener('mouseover', function() {
  div.style.backgroundColor = 'red';
});

// Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior//
div.addEventListener('keydown', function(event) {
  div.style.fontSize = '80px';
  const teclaPresionada = event.key;
  console.log('Tecla presionada:', teclaPresionada);
});

// Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior//
div.addEventListener('dblclick', function() {
  div.textContent = 'Contenido';
});

// Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento//
window.addEventListener('load', function() {
  document.body.style.backgroundImage = 'url("gatovolador.jpg")';
});