import { TestBed } from '@angular/core/testing';

import { ServicepostService } from './servicepost.service';
import { HttpClient } from '@angular/common/http';
import { URL_POST } from './posturl';
import { Ipost } from './ipost';
import { of } from 'rxjs';

describe('ServicepostService', () => {


  let service: ServicepostService<Ipost>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ServicepostService(
      httpClientSpy,
      TestBed.inject(URL_POST),
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

  });
});
