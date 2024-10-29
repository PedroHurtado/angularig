import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
    constructor(private route:ActivatedRoute){
        const {id} =this.route.snapshot.params
        console.log(id)
    }
}
