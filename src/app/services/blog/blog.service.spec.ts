import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthService } from '../authorization/auth.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogService,
        HttpClient,
        HttpHandler,
        AuthService
      ]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
