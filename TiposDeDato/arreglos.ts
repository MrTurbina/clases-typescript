interface Alumnos{
    nombre:string;
    edad:number;
}

var listadoDeNombres:Array<String> = ['Juan', 'Maria', 'Ana', 'Carmen'];

var listadoDeNumeros: Array<number> = [15, 25 , 36, 695, 95];

var listadoDeAlumnos: Array<Alumnos> = [
    {
        nombre: 'Maria', edad: 15
    },
    {
        nombre: 'Ana', edad: 95
    },
    {
        nombre: 'Johana', edad: 56
    }
]

console.log(listadoDeNombres[1]);
console.log(listadoDeNumeros);
console.log(listadoDeNumeros[3]);
console.log(listadoDeAlumnos);
console.log(listadoDeAlumnos[2].nombre);