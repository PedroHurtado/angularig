import { Component, Inject, InjectionToken } from '@angular/core';
import { Ipost } from '../ipost';
import { ServicepostService } from '../servicepost.service';
import { ISpinner } from '../ispinner';
import { Spinner } from '../spinnerdecorator';
import { URL_POST } from '../posturl';
import { HttpClient } from '@angular/common/http';
import { IComments } from '../icomments';

export const POSTALL = new InjectionToken<string>('POST_ALL');
export const COMENTSALL = new InjectionToken<string>('COMMENTS_ALL');

const factory = (provide:InjectionToken<string> ,path: string) => {
  return {
    provide:provide,
    useFactory: <T>(http: HttpClient, url: string) => {
      return new ServicepostService<T>(http, url, path)
    },
    deps: [HttpClient, URL_POST]
  }
}

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [],
  providers: [
    factory(POSTALL,'/posts'),
    factory(COMENTSALL,'/comments'),
  ],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent implements ISpinner {
  posts = Array<Ipost>();
  comments = Array<IComments>()
  spinnerState = false;
  constructor(
    @Inject(POSTALL) private service: ServicepostService<Ipost>,
    @Inject(COMENTSALL) private sericeComments: ServicepostService<IComments>

  ) {
    //this.service.get().subscribe(p=>this.posts = p)
    this.getData()
  }
  on(): void {
    this.spinnerState = true
  }
  off(): void {
    this.spinnerState = false;
  }
  @Spinner()
  async getData() {
    this.posts = await this.service.get()
    this.comments = await this.sericeComments.get()
  }
}
