import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../services/authorization/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitElement: DebugElement;
  let emailElement: HTMLInputElement;  
  let passwordElement: HTMLInputElement;
  // let formElement: DebugElement;
  // let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        AuthService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();  
  
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    submitElement = fixture.debugElement.query(By.css('.btn-primary'));
    emailElement = fixture.nativeElement.querySelector('input[type=email]');
    // passwordElement = fixture.debugElement.query(By.css('input[type=password]'));
    passwordElement = fixture.nativeElement.querySelector('input[type=password]');
    // authService = TestBed.get(AuthService);        
    // formElement = fixture.debugElement.query(By.css('#form'));

  });

  it('when logged out, show login form', () => {
    emailElement.value = 'new@gmail.com'
    passwordElement.value = 'newnew';

    // emailElement.dispatchEvent(newEvent('input[type=email]'));

    // expect(passwordElement.nativeElement.textContent.trim()).toBe('');
    // spyOn(component, 'checkIfLoggedIn').and.returnValue(true);    
    // fixture.detectChanges();    
    // expect(passwordElement).toBeFalsy();
    // console.log(passwordElement);
    
  });
});
