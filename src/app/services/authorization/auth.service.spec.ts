import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthService
      ]
    });
  });

  it('should send an expected login request',
    async(
      inject([AuthService, HttpTestingController], (service: AuthService, backend: HttpTestingController) => {
        service.login('abc', 'def').subscribe();

        backend.expectOne((req: HttpRequest<any>) => {
          return req.url === 'http://localhost:8001/login'          
          && req.method === 'POST'
          && req.headers.get('Content-Type') === 'application/json'
          && req.body.email === 'abc'
          && req.body.password === 'def'          
        }, 'POST to http://localhost:8001/login with email and password');
      })
    )
  );
});