import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecustom',
})
export class DateCustomPipe implements PipeTransform {
  transform(value?: any, param?: string): string {
    return !value ? '00/00/0000' : new Date(value).toLocaleString();
  }
}
