import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component {
  constructor(private fb: FormBuilder) {

  }

  formUser = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]]
  })

  get name() {
    return this.formUser.get('name') as FormControl
  }
  get email(){
    return this.formUser.get('email') as FormControl
  }
  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required, Validators.email])
  // })
}
