/* var nombres: string[] = ["Juan", "Pedro", "Maria"];

nombres.forEach((nombre) => { 
    if(nombre == "Pedro"){
        console.log("hola Pedro");
    }
 });
 */

interface Alumno{
    nombre: string;
    apellido: string;
}
var alumnos : Alumno[] = [];

alumnos.push({nombre: "Juan", apellido: "Perez"});
alumnos.push({nombre: "Maria", apellido: "Gonzalez"});
alumnos.push({nombre: "Pedro", apellido: "Urdemales"});


alumnos.forEach((alumno) => {
    console.log(alumno.nombre);
});