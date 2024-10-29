import { Component, viewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './calendar/grid/grid.component';
import { TimerComponent } from './calendar/timer/timer.component';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { ListComponent } from './pizzas/list/list.component';
import { CarritoComponent } from './pizzas/carrito/carrito.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { LayoutComponent } from './pages/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
        RouterOutlet,
        GridComponent,
        TimerComponent,
        DialogComponent,
        ListComponent,
        CarritoComponent,
        PostlistComponent,
        LayoutComponent
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  name = 'pedro hurtado';
  user='pedro';
  data=[1,2,3,4,5,6]
  dialog = viewChild(DialogComponent);
  handlerClick(){
      this.data[2] = 88;
  }
  openDialog(){
    this.dialog()?.openDialog()
  }
  closeDialog(){
    this.dialog()?.closeDialog()
  }
}
