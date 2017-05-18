import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <h2>
      {{title}}
    </h2>

    <app-other></app-other>

    <app-another>
      <h1>ng-content Test</h1>
    </app-another>

    <app-databinding></app-databinding>

    <hr>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </app-lifecycle>

    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed value'">Click to change content</button>
    <button (click)="boundValue = 2000">Click to change Binding</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello Martin!';

  delete = false;

  test = 'Starting value';

  boundValue = 1000;
}
