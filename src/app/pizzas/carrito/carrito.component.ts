import { Component, computed, signal, OnDestroy } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnDestroy {

  private pizzas = signal<Array<Pizza>>([]);
  total = computed(() => this.pizzas().map(p=>p.price).reduce((a,price)=>a+price,0))

  //el importe total de las pizzas
  constructor() {
    this.addPizza = this.addPizza.bind(this)
    document.addEventListener('add-carrito',this.addPizza)
  }
  private addPizza(ev: Event) {
    ev.stopPropagation();
    const pizza = ((ev as CustomEvent)?.detail as Pizza)
    if (pizza) {
      this.pizzas().push(pizza)
      this.pizzas.set([...this.pizzas()])
    }
  }
  ngOnDestroy(): void {
    document.removeEventListener('add-carrito', this.addPizza)
  }

}


