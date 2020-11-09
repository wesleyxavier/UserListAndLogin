import { DateCustomPipe } from './date.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DateCustomPipe],
  exports: [DateCustomPipe],
})
export class DatePipeModule {}
