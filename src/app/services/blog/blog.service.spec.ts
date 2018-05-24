import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './blog.service';
import { AuthService } from '../authorization/auth.service';

describe('BlogService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        BlogService,
        AuthService
      ]
    });
  });

  it('should send an expected getBlogs request',
    async(
      inject([BlogService, HttpTestingController], (service: BlogService, backend: HttpTestingController) => {
        service.getBlogs().subscribe();

        backend.expectOne((req: HttpRequest<any>) => {
          console.log(req);          
          return req.url === 'http://localhost:8001/blogs'          
          && req.method === 'GET'
          && req.headers.get('Content-Type') === 'application/json'
        }, 'GET to http://localhost:8001/blogs for array of blogs');
      })
    )
  );
});