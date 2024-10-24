import { Component } from '@angular/core';
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
}
