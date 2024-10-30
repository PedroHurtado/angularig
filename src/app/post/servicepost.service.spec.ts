import { TestBed } from '@angular/core/testing';

import { ServicepostService } from './servicepost.service';
import { HttpClient } from '@angular/common/http';
import { Ipost } from './ipost';
import { of } from 'rxjs';
import { URL_POST } from './posturl';

describe('ServicepostService', () => {


  let service: ServicepostService<Ipost>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: URL_POST, useValue: "https://my-json-server.typicode.com/typicode/demo" }
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ServicepostService(
      httpClientSpy,
      TestBed.inject(URL_POST),
      //"https://my-json-server.typicode.com/typicode/demo",
      "/post"
    )
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', async () => {
    const Post: Ipost[] = [
      {
        id: 1,
        title: 'post 1'
      }
    ]
    httpClientSpy.get.and.returnValue(of(Post))
    const post = await service.get()
    expect(post.length).toEqual(1);

  });
});
