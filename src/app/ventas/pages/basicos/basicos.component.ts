import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'suriel';
  nombreUpper: string = 'SURIEL';
  nombreCompleto: string = 'surIEL AsaEl';

  fecha: Date = new Date(); // el día de hoy


}
