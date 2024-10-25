import { Component, HostListener } from '@angular/core';
import { Pizza } from '../pizza';
import { PubsubService } from '../pubsub.service';




@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(private pubsub:PubsubService){}

  pizzas = Array<Pizza>(
    {id:1,name:'carbonara', price:5},
    {id:2,name:'mediaterranea', price:2},
  )

  @HostListener('click', ['$event'])
  handlerClick(ev:Event){
    const node = (ev.composedPath() as HTMLElement[]).find(n=>n.dataset && 'id' in n.dataset);
    if(node){
      const {id} = node.dataset
      const pizza = this.pizzas.find(p=>p.id===Number(id))
      if(pizza){
        //this.emit(pizza);
        this.pubsub.emit(structuredClone(pizza))
      }
    }
  }
  private emit(pizza:Pizza){
      document.dispatchEvent(this.createEvent(pizza))
  }
  private createEvent(pizza:Pizza):CustomEvent{
    return new CustomEvent('add-carrito', {
      composed:true,
      bubbles:true,
      detail:structuredClone(pizza)
    })
  }
}
