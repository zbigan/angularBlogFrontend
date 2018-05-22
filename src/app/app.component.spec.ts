import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './services/authorization/auth.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { DebugElement } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// import {ToastToken} from 'ngx-toastr/toastr/toast-token';

describe('Test what is being shown in navbar when logged in and logged out', ()=>{

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  let logInOutElement: DebugElement;
  let newblogElement: DebugElement;  
  let registerElement: DebugElement;  

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers:[
        AuthService,
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    logInOutElement = fixture.debugElement.query(By.css('#log'));
    newblogElement = fixture.debugElement.query(By.css('#new'));
    registerElement = fixture.debugElement.query(By.css('#register'));  
  });

  it('should create the app', async ()=>{
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show Login button if not logged in and vice versa', ()=>{
    expect(logInOutElement.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(logInOutElement.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'getToken').and.returnValue('123');
    fixture.detectChanges();
    expect(logInOutElement.nativeElement.textContent.trim()).toBe('Logout');
  });
  
  it('should show Newblog button if logged in and vice versa', ()=>{
    expect(newblogElement.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(newblogElement.nativeElement.textContent.trim()).toBe('');
    spyOn(authService, 'getToken').and.returnValue('123');
    fixture.detectChanges();
    expect(newblogElement.nativeElement.textContent.trim()).toBe('Newblog');        
  });

  it('should show Register button if logged out and vice versa', ()=>{
    expect(registerElement.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(registerElement.nativeElement.textContent.trim()).toBe('Register');
    spyOn(authService, 'getToken').and.returnValue('123');
    fixture.detectChanges();
    expect(registerElement.nativeElement.textContent.trim()).toBe('');        
  });
  
});

