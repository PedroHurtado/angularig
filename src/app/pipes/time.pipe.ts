import { Pipe, PipeTransform } from '@angular/core';



function getTime(date:Date) {
  let options: Intl.DateTimeFormatOptions= { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}
@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    return getTime(value);
  }

}
