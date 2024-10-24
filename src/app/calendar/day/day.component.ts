import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent{
  @Input() day = 1;
  //@Output("selectedDay") selectedDay = new EventEmitter<number>();

  /*@HostListener('click')
  click(){
    this.selectedDay.emit(this.day)
  }*/
}
