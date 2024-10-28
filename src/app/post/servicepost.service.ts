import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';
import { URL_POST } from './posturl';
import { Observable } from 'rxjs';
import { Ipost } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class ServicepostService {

  constructor(
    private http:HttpClient,
    @Inject(URL_POST) private url:string
  ) {

  }
  get():Observable<Ipost[]>{
    return this.http.get<Ipost[]>(this.url);
  }
}
