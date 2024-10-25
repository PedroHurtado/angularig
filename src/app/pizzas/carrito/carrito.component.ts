import { Component, computed, signal,WritableSignal } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

   private pizzas: WritableSignal<Array<Pizza>>=signal([]);
   elements  = computed(()=>this.pizzas().length)

   constructor(){
      document.addEventListener('add-carrito', (ev)=>{
         const pizza = ((ev as CustomEvent)?.detail as Pizza)
         if(pizza){
           this.pizzas().push(pizza)
           this.pizzas.set([...this.pizzas()])
         }
      })
   }
}


