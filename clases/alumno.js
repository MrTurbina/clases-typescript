//inicio Clase Alumno
var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    };
    Alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        this.mostrarMensaje();
    };
    return Alumno;
}());
//fin clase
var alumno1 = new Alumno();
alumno1.asignar("Juan", "Perez", 80);
//alumno1.mostrarMensaje();
var alumno2 = new Alumno();
alumno2.asignar("Maria", "Jose", 70);
//alumno2.mostrarMensaje();
var alumno3 = new Alumno();
alumno3.asignar("Pedro", "Gomez", 60);
//alumno3.mostrarMensaje();
