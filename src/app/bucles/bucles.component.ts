import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  personas: Persona[] = [
    {name:'pacodev', age: 22},
    {name:'lossinso', age: 62},
    {name:'enrique', age: 24},
    {name:'esteman', age: 24},
  ]
}
