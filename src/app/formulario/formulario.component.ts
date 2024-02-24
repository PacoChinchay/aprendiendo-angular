import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  openAlert: boolean = false

  console(name: string) {
    console.log('hola', name);
    this.openAlert = true
  }

}
