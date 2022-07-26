import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
/* import { FormsModule } from '@angular/forms'; */
/* debería poder importarse el modulo forms para que funcione, pero por algun 
motivo solo al importarlo en "imports" funciona ¯\_(ツ)_/¯ */



@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
