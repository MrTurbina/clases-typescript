//inicio Clase Alumno
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.nombre = "Ana";
        this.apellido = "Pineda";
        this.peso = 16;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    };
    Alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        //        this.mostrarMensaje();
    };
    return Alumno;
}());
//fin clase
/* var alumno1: Alumno = new Alumno();

alumno1.asignar("Juan", "Perez", 80);
 */
/* var alumno2: Alumno = new Alumno();
alumno2.asignar("Maria", "Jose", 70); */
//var alumno3: Alumno = new Alumno();
//alumno3.asignar("Pedro", "GomezS", 60);
