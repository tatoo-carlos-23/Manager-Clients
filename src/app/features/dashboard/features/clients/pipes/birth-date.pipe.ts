import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDate',
})
export class BirthDatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    return new Intl.DateTimeFormat('es', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(value);
  }
}
