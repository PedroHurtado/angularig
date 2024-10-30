import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

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
