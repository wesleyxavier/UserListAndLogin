import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-copy',
  template: `
    <button mat-raised-button (click)="viewOnClick()" color="accent">
      Copy
    </button>
  `,
})
export class ButtonCopyComponent {
  @Output() eventclick = new EventEmitter();

  viewOnClick() {
    this.eventclick.emit(true);
  }
}
