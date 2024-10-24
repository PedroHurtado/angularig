import { Component, HostListener } from '@angular/core';
import { DayComponent } from '../day/day.component';

function* getDays(){
  for(let i=0;i<31;i++){
    yield i+1
  }
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  days = [...getDays()]

  @HostListener('click', ['$event'])
  selectedDay(ev:Event){
    const node = (ev.composedPath() as HTMLElement[]).find(n=>n.dataset && 'day' in n.dataset)
    if(node){
      const {day} = node.dataset
      console.log(day)
    }
  }
}
