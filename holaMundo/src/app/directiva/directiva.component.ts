import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';


interface Producto{
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVencimiento: Date;
  esImportante: boolean;
  esGrande: boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando: boolean = true;
  nombres: Array<string> = ['Juan', 'Pepe', 'Maria', 'Pedro'];
  pestana: string = '';
  productos: Array<Producto> = [
    {
      nombre: 'Arroz',
      stock: 50, 
      fabricante: 'Campo Lindo',
      fechaVencimiento: new Date('04/12/2022'),
      esImportante: true,
      esGrande: false
    },
    {
      nombre: 'Leche',
      stock: 20,
      fabricante: 'La Lechera',
      fechaVencimiento: new Date('04/10/2022'),
      esImportante: false,
      esGrande: true
    },
    {
      nombre: 'Bebidas',
      stock: 200,
      fabricante: 'Coca Cola',
      fechaVencimiento: new Date('3/5/2022'),
      esImportante: true,
      esGrande: true
    }
  ];
  mostrarCuadrado: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;

    }, 5000);
  }

  mostrarCargando() {
    this.cargando= !this.cargando;
  }

  cambiarPestana(pestana: string) {
    this.pestana = pestana;
  }

  alternarFondo() {
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }

}
 