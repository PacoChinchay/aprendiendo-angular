import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  texto = 'hola a mi mundo'

  text_color: string = ''

  btn_color: boolean = false

  btn_disabled: boolean = false

  src: string = ''

  ChangeSrc(btn: string) {
    
    const src1: string = "https://images.pexels.com/photos/9248672/pexels-photo-9248672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    const src2: string = 'https://images.pexels.com/photos/19648032/pexels-photo-19648032/free-photo-of-paisaje-montanas-arboles-otono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    if (btn === 'btn-1') this.src = src1

    if (btn === 'btn-2') this.src = src2

  }
}
