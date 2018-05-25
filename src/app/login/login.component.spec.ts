import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../services/authorization/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpBase } from '../http-base';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let welcomeMessage: DebugElement;
  let loginForm: DebugElement;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        AuthService,
        HttpClient,
        HttpHandler,
        HttpBase
      ]
    })
    .compileComponents();  
  
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    welcomeMessage = debugElement.query(By.css('#welcomeMessage'));
    loginForm = debugElement.query(By.css('#loginForm'));  
  });

  it('should bind the email and password inputs to the correct properties', () => {
    fixture.detectChanges();

    let inputEmail = debugElement.query(By.css('#email'));
    let inputEmailElement = inputEmail.nativeElement;
    inputEmailElement.value = 'new@gmail.com';
    inputEmailElement.dispatchEvent(new Event('input'));
    expect(component.email).toBe('new@gmail.com');

    let inputPassword = debugElement.query(By.css('#password'));
    let inputPasswordElement = inputPassword.nativeElement;
    inputEmailElement.value = 'newnew';
    inputEmailElement.dispatchEvent(new Event('input'));
    expect(component.email).toBe('newnew');

  });

  it('should call doLogin() function on click', () => {
    spyOn(component, 'doLogin');
    fixture.detectChanges();

    let submit = debugElement.query(By.css('a'));
    let submitElement = submit.nativeElement;

    submitElement.dispatchEvent(new Event('click'));

    expect(component.doLogin).toHaveBeenCalled();
  });


  it('should hide login form and show welcome message when token set and vice versa', () => {   
    expect(loginForm.nativeElement.textContent.trim()).toBe('');      
    expect(welcomeMessage.nativeElement.textContent.trim()).toBe('');                  
    fixture.detectChanges();        
    expect(loginForm.nativeElement.textContent.trim()).toContain('Login');    
    expect(welcomeMessage.nativeElement.textContent.trim()).toBe('');                      
    spyOn(component, 'checkIfLoggedIn').and.returnValue(true);
    fixture.detectChanges();    
    expect(loginForm.nativeElement.textContent.trim()).toBe('');    
    expect(welcomeMessage.nativeElement.textContent.trim()).toContain('You are logged in.');        
  });


});
