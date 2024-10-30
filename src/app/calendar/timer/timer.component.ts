import { Component, effect, signal } from '@angular/core';
import { TimePipe } from '../../pipes/time.pipe';



@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [TimePipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  date = signal(new Date())
  constructor(){

    effect((onCleanup)=>{
      //crear un intervalor cada segundo
      const handler = setInterval(()=>this.date.set(new Date()),1000)

      onCleanup(() => {
        clearTimeout(handler);
      });

    })

  }
}
