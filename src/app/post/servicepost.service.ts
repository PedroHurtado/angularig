import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';
import { URL_POST } from './posturl';
import { lastValueFrom, Observable } from 'rxjs';
import { Ipost } from './ipost';

/*@Injectable({
  providedIn: 'root'
})*/
export class ServicepostService<T> {

  constructor(
    private http:HttpClient,
    private url:string,
    private path:string
  ) {

  }
  get():Promise<T[]>{
    return lastValueFrom(this.http.get<T[]>(`${this.url}${this.path}`));
  }
}
