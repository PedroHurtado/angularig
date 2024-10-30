import { TestBed } from '@angular/core/testing';

import { ServicepostService } from './servicepost.service';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { URL_POST } from './posturl';

interface IFoo{

}

describe('ServicepostService', () => {


  let service: ServicepostService<IFoo>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  //https://stackoverflow.com/questions/51899737/karma-tests-nullinjectorerror-no-provider-for-injectiontoken-filename
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: URL_POST, useValue: "https://locahost:8080" }
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ServicepostService(
      httpClientSpy,
      TestBed.inject(URL_POST),
      "/foo"
    )
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', async () => {
    const Post: IFoo[] = [
      {
      }
    ]
    httpClientSpy.get.and.returnValue(of(Post))
    const post = await service.get()
    expect(post.length).toEqual(1);

  });
});
