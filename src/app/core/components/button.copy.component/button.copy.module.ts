import { ButtonCopyComponent } from './button.copy.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ButtonCopyComponent],
  exports: [ButtonCopyComponent],
  entryComponents: [ButtonCopyComponent],
  imports: [CommonModule, MatButtonModule],
})
export class ButtonCopyModule {}
