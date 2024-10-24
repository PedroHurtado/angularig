import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './calendar/grid/grid.component';
import { TimerComponent } from './calendar/timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'pedro hurtado';
  user='pedro';
  data=[1,2,3,4,5,6]
  handlerClick(){
      this.data[2] = 88;
  }
}
