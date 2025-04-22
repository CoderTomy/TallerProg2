// ----- VARIABLES -----

/*
var nombre = "osval" // Débilmente tipada.
console.log(`🚀 ~ nombre:`, nombre)
nombre=1 // Se puede reasignar el valor a un número o lo que sea.
console.log(`🚀 ~ nombre:`, nombre)

var nombre = "osvaldin" // No se puede volver a declarar la variable con var, pero si se puede reasignar el valor.
console.log(`🚀 ~ nombre:`, nombre)

let apellido= "ojeda"
console.log(`🚀 ~ apellido:`, apellido)
apellido= 20 // SÍ.
console.log(`🚀 ~ apellido:`, apellido)
let apellido= "Ojeda" // NO.
*/

// NOTA: no es recomendable usar var, ya que es una variable global y puede causar problemas de seguridad y rendimiento. Se recomienda usar let o const.

// ----- CONSTANTES -----

/*
const pi = 3.14;
pi="3.1416" // No se puede reasignar el valor a una constante.
console.log(`🚀 ~ pi:`, pi)
*/

// ----- TIPOS DE DATOS -----

/* En JavaScript, los tipos de datos son dinámicos y se pueden cambiar en tiempo de ejecución. No es necesario declarar el tipo de dato al crear una variable. JavaScript tiene dos tipos de datos: primitivos y complejos. */

// ----- PRIMITIVOS -----

/*
Los tipos de datos primitivos son: string, number, bigint, boolean, undefined, symbol y null.

// ----- STRING -----

let str = "string";
console.log(`🚀 ~ str:`, typeof str); // El punto y coma es optativo, pero es recomendable integrarlo por las dudas.
let str2 = "string";
let str3 = `string ${pi}`;
console.log(`🚀 ~ str3:`, str3);


// ----- NUMBER -----

let num = 3;
console.log(`🚀 ~ num:`, typeof num); // La función typeof indica el tipo de dato de lo que está a continuación.

// ----- BIGINT -----

let bigInt = 1234567890123456789012345678901234567890n;
console.log(`🚀 ~ bigInt:`, typeof bigInt);

// ----- BOOLEAN -----

let bool = true;
console.log(`🚀 ~ bool:`, typeof bool);

// ----- UNDEFINED -----

let undef;
console.log(`🚀 ~ undef:`, typeof undef);

// ----- SYMBOL -----

let sym = Symbol("symbol"); // Los símbolos son únicos y no se pueden comparar entre sí.
console.log(`🚀 ~ sym:`, typeof sym);

let sym2 = Symbol("symbol");
console.log(`🚀 ~ sym2:`, typeof sym2);
console.log(`🚀 ~ sym == sym2:`, sym === sym2);

console.log(`🚀 `, "2" === 2);

// ----- NULL -----

let nul = null;
console.log(`🚀 ~ nul:`, typeof nul);
*/

// ----- COMPLEJOS -----

/*
Los tipos de datos complejos son: object, array y function.

// -----  OBJECT -----

let dev="isDeveloper";
let dev = "edad";

NOTA: es recomendado usar const para objetos, ya que no se puede cambiar el valor de la variable, pero sí se pueden cambiar 
los valores de las propiedades del objeto.

const obj = 
{
  nombre: "osval",
  apellido: "ojeda",
  edad: 20,
  isDeveloper: true,
};

console.log(`🚀 ~ obj:`, obj);
obj.nombre = "ricardo";
console.log(`🚀 ~ obj:`, obj);
console.log(`🚀 ~ obj:`, typeof obj);
console.log(`🚀 ~ obj:`, obj.isDeveloper);
console.log(`🚀 ~ obj:`,  obj.name);
console.log(`🚀 ~ obj:`, obj[dev]);
obj = "";

// ------ ARRAY -----

Los arrays son objetos, pero con propiedades especiales que permiten acceder a sus elementos por su índice.


const arr = [1, 2, 3, 4, 5];
console.log(`🚀 ~ arr:`, typeof arr);
console.log(`🚀 ~ arr:`, arr[0]);
*/

// ----- FUNCTION -----

/* Hay dos tipos de funciones: las funciones declarativas y las funciones expresivas. Las funciones declarativas son aquellas que se declaran con la palabra reservada function, mientras que las funciones expresivas son aquellas que se declaran como una variable y se le asigna una función. */

// saludar()
function saludar(parametros)
{
  console.log("Hola");
  /*
  return "Hola";
  console.log("Hola"); // Son dos maneras de hacer lo mismo, pero la segunda no se ejecuta porque la primera ya ha devuelto un valor y ha salido de la función.
  */
}

// Las funciones que no retornan nada, devuelven undefined por defecto.

/*
console.log(`🚀 ~ saludar ~ saludar:`, saludar());
saludar();
*/

// ----- Arrow function -----

/* El hoisting es una técnica de JavaScript que permite llamar a una función antes de declararla. Esto se debe a que JavaScript carga las funciones en memoria antes de ejecutar el código. Sin embargo, esto no ocurre con las funciones expresivas, ya que estas se cargan en memoria cuando se ejecuta el código. Por lo tanto, no se puede llamar a una función expresiva antes de declararla. */

// console.log(`🚀 ~ sumar:`, sumar(3,2));
var sumar = (a, b) => // No hay hoisting, por lo que no se puede llamar a la función antes de declararla.
{
  return a + b;
};
// console.log(`🚀 ~ sumar:`, sumar(1,2))

// -----  MÉTODOS -----

// --- Métodos de string ---
let str4 = "Hola Mundo";
/*
console.log(`🚀 ~ str4:`, str4.length);
console.log(`🚀 ~ str4:`, str4.toUpperCase());
console.log(`🚀 ~ str4:`, str4.split(" "));
*/

const array = str4.split(" ");
/*
console.log(`🚀 ~ array:`, array);
console.log(`🚀 ~ array:`, array);
console.log(`🚀 ~ array:`, array.join(" "));
console.log(`🚀 ~ array:`, array.length = 0);
console.log(`🚀 ~ array:`, array);
*/

// ----- OPERADORES -----

// --- Aritméticos ---
let a = 3;
let b = 2;
console.log(`🚀 ~ a + b:`, a + b);
a++; // Incrementa a en 1 es igual a hacer a = a + 1.
console.log(`🚀 ~ a++;  ${a}`);

// --- De asignación ---
("="); // Asigna el valor.
let c = "c";
console.log(`🚀 ~ c:`, c);

// "+="; // Suma y asigna.
let d = 3;
d += 2; // d = d + 2.
console.log(`🚀 ~ d:`, d);

// --- De comparación ---
// "=="; // Igual.
// "==="; // Igual y del mismo tipo.
// "!="; // Diferente.
// "!=="; // Diferente y del mismo tipo.
console.log(`🚀 ~ c==d:`, c !== d);

const obj1 =
{
  nombre: "osval",
  edad: 20,
};

const obj2 =
{
  nombre: "osval",
  edad: 20,
};

// const obj2 = obj1 // No.

console.log(`🚀 ~ obj1===obj2:`, obj1 == obj2);

// --- Lógicos ---

// && | AND.
// || | OR.
// ! | NOT.
console.log(`🚀 ~ && ${true && true}`);
console.log(`🚀 ~ && ${false && true}`);
console.log(`🚀 ~ || ${true ||  false}`);
console.log(`🚀 ~ !not ${!true}`);

// ----- TERNARIO -----

// Formato: Condición ? true : false.
const edad = 20;
const esMayor = edad >= 18 ? true : false;
console.log(`🚀 ~ esMayor:`, esMayor);

// ----- NULLISH COALESCING -----

// ?? nullish coalescing operator

let valor = 0;
const resultado= valor && "no hay valor";
console.log(`🚀 ~ resultado:`, resultado);