import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  number: number = 1

  minus() {
    this.number--
  }

  sum() {
    this.number++
  }
}
