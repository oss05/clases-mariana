

// var numero = 5;

// let numero2 = 10;

// if(numero === 5) {
//     console.log("el numero " + numero + " es visible en el scoope de var");

//     var numerodentro = 15;
// }

// if(numero2 === 10) {
//     console.log("el numero " + numero2 + " es visible en el scoope de let");

//     let numerodentro2 = 20;

//     console.log("el numero " + numerodentro2 + " sigue siendo visible en el scoope de let");
// }

// console.log("el numero " + numerodentro + " sigue siendo visible en el scoope de var");

// console.log("el numero " + numerodentro2 + " sigue siendo visible en el scoope de let");


// Operadores 

// + sumar  5 + 5 
// - restar   5 - 5
// * multiplicar 5 * 5
// / dividir 5 / 5

// ¿ Que pasa si utilizo el operador + con variables de tipo "string" ? 

//"hola" + "Mariana" // concatenar

// condiciones

// Evaluar o validar casos

// let trabajo = Boolean(prompt("tienes trabajo?"));
// // si si tiene para la ejecucion
// let habilidades = prompt("cual es tu habilidad principal");
// let habilidadesSecundarias = prompt("cual es tu habilidad secundaria");

// if( trabajo === true ) {

//     console.log("cool!");

//     // ifs anidados

//     if (habilidades === "sistemas" && habilidadesSecundarias === "desarrollo") {

//         console.log("aplica en SOMA!");
    
//     }
    
// }else {

//     console.log("no puedes aplicar en SOMA, marrano!");
    
// }

// operadores lógicos
// and && "y"
// or || "o"
// not ! "niega"


// con alt + click puedes tener varios cursores

// ciclos + arreglos

// for( let i = 0; i < 10 ; i++ ) {

//     console.log( i );
    
// }

// i = 0 ?? 0 < 10 ?? (si) entonces sumale uno 
// i = 1 ?? 1 < 10 ?? (si) entonces sumale uno
// .
// . 
// . 
// i = 9 ?? 9 < 10 ?? (si) entonces sumale uno
// i = 10 ?? 10 < 10 ?? (no) entonces termina la ejecucion

// for( let i = 0; i <= 10 ; i++ ) {

//     console.log( i );
    
// }

// arreglo es una coleccion de datos 
let colores = ["rosa", "azul" , "rojo", "amarillo", "morado", "cafe", "negro", "dorado", "plateado"];
             // 0       1          2        3        4

// forma marrana 

// console.log(colores);
// console.log(colores[0]);
// console.log(colores[1]);
// console.log(colores[2]);
// console.log(colores[3]);
// console.log(colores[4]);
colores.push("naranja");
colores.push("blanco");

colores.pop();
colores.pop();

colores.splice( 4 , 1 );

for(let i = 0; i < colores.length; i++){

    console.log( colores[i] );
    
}

console.log(colores);

// i = 0 ?? 0 < 10 ?? (si) entonces sumale uno 
// i = 1 ?? 1 < 10 ?? (si) entonces sumale uno
// .
// . 
// . 
// i = 9 ?? 9 < 10 ?? (si) entonces sumale uno
// i = 10 ?? 10 <= 10 ?? (si) entonces sumale uno
// i = 11 ?? 11 <= 10 ?? (no) entonces termina la ejecucion
