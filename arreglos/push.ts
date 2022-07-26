/*  var nombres: string[] = ["Juan", "Pedro", "Maria"];

var numeros: number[] = [15,26, 36, 59];

numeros.push(100);
console.log(numeros); */

interface Alumno {
    nombre: string;
    apellido: string;
}
var alumnos: Alumno[] = [];

var ana:Alumno={nombre:"Ana", apellido:"Perez"};
var carmen:Alumno={nombre:"Carmen", apellido:"Rojas"};

alumnos.push(ana);
alumnos.push(carmen);

console.log(alumnos);