import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="" [(ngModel)]="person.name">
    <input type="" [(ngModel)]="person.name">
  `
})
export class TwoWayBindingComponent {
  person = {
    name: 'Marto',
    age: 26
  };
}
