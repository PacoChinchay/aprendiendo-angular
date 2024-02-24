import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  fecha = new Date()
  dia = this.fecha.getDay()
}
