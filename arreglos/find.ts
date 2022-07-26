interface Alumno{
    alumnoId: number;
    nombre: string;
    apellido: string;
}

var alumnos : Alumno[] = [];

alumnos.push({alumnoId: 1, nombre: "Juan", apellido: "Perez"});
alumnos.push({alumnoId: 2, nombre: "Maria", apellido: "Gonzalez"});
alumnos.push({alumnoId: 3, nombre: "Pedro", apellido: "Urdemales"});

var alumnoEncontrado = alumnos.find((alumno) => {
    return alumno.nombre.includes("Maria");
});

console.log(alumnoEncontrado);