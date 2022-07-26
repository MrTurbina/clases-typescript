/* //inicio Clase Alumno
class Alumno{
    private nombre:string;
    private apellido:string;
    private peso:number;

    mostrarMensaje():void{
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    }

    asignar(nombreParametro:string, apellidoParametro:string, pesoParametro:number){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        this.mostrarMensaje();
    }

}

//fin clase

var alumno1: Alumno = new Alumno();

alumno1.asignar("Juan", "Perez", 80);

//alumno1.mostrarMensaje();

var alumno2: Alumno = new Alumno();
alumno2.asignar("Maria", "Jose", 70);
//alumno2.mostrarMensaje();

var alumno3: Alumno = new Alumno();
alumno3.asignar("Pedro", "Gomez", 60);
//alumno3.mostrarMensaje(); */