import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthService } from '../authorization/auth.service';
import { HttpBase } from '../../http-base';
import { Router } from '@angular/router';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        AuthService,
        HttpBase,
        Router
      ]
    });
  });

  xit('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
