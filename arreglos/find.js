var alumnos = [];
alumnos.push({ alumnoId: 1, nombre: "Juan", apellido: "Perez" });
alumnos.push({ alumnoId: 2, nombre: "Maria", apellido: "Gonzalez" });
alumnos.push({ alumnoId: 3, nombre: "Pedro", apellido: "Urdemales" });
var alumnoEncontrado = alumnos.find(function (alumno) {
    return alumno.nombre.includes("Maria");
});
console.log(alumnoEncontrado);
