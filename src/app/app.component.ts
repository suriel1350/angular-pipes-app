import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'suriEL asaEl';
  valor: number = 1000;

  mostrarNombre(){
    console.log(this.nombre);
  }
}
