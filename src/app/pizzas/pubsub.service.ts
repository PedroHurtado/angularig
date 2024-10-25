import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PubsubService {
  private subject:Subject<Pizza> = new Subject<Pizza>();
  constructor() { }
  emit(pizza:Pizza):void{
    this.subject.next(pizza);
  }
  public observable():Observable<Pizza>{
    return this.subject.asObservable()
  }
}
