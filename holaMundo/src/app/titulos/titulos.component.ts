import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre: string = 'Juan';
  apellido: string = 'Perez';
  alumno :any = {
    nombre:'Carlos',
    apellido:'Pineda',
    edad:25
  }


imagen:string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

inputNuevo : string = 'hola soy un input';

otroInput:string = 'otro input';

correo:string = '';
password:string = '';


  constructor() { }

  ngOnInit(): void {
  }

  ingresar(evento: any){
    if(evento.keyCode == 13){
      console.log('ingresando al sistema');
    }

  }

  llamarAlert(){
    alert('ha presionado doble click');
  }

  escribirModelo(){
    console.log(this.password);
  }

  escribirCorreo(){
    /* this.password = this.correo; */
    console.log(this.correo);
    /* console.log(this.password) */;
  }
  escribir(evento: any){
    console.log(evento.target.value);
  }

  colorearFondo(evento: any){
    console.log(evento);
    evento.srcElement.style.background = 'red';
    evento.srcElement.style.width = '200px';
  }

  cambiarTamano(evento: any){
    console.log(evento);
    evento.srcElement.style.width = '100px';
    evento.srcElement.style.height = '100px';
    evento.srcElement.style.border = '1px solid red';
  }
  agrandarTamano(evento: any){
    evento.srcElement.style.width = '500px';
    evento.srcElement.style.height = '500px';
    evento.srcElement.style.border = '1px solid green';
  }
}
  