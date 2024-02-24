import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component {
  name: FormControl<string | null> = new FormControl('')
  email: FormControl<string | null> = new FormControl('')
}
