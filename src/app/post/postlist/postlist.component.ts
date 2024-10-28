import { Component } from '@angular/core';
import { Ipost } from '../ipost';
import { ServicepostService } from '../servicepost.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent {
  posts=Array<Ipost>();
  constructor(private service:ServicepostService){
    this.service.get().subscribe(p=>this.posts = p)
  }
}
