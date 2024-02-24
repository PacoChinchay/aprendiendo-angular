import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  texto = 'hola a mi mundo'

  text_color: string = ''

  btn_disable: boolean = false
}
