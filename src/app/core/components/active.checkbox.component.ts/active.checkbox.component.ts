import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-checkbox',
  template: `
  <mat-checkbox [checked]="active" [disabled]="true"></mat-checkbox>
  `
})
export class ActiveCheckboxComponent {
  @Input() active = true;
}
