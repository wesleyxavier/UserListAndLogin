import { ActiveCheckboxComponent } from './active.checkbox.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ActiveCheckboxComponent],
  exports: [ActiveCheckboxComponent],
  entryComponents: [ActiveCheckboxComponent],
  imports: [CommonModule, MatCheckboxModule],
})
export class ActiveCheckboxModule {}
