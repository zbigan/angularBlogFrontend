import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './services/authorization/auth.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { DebugElement } from '@angular/core';
import { HttpBase } from './http-base';
import { UserService } from './services/user/user.service';
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
        HttpBase,
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
    spyOn(component, 'checkIfLoggedIn').and.returnValue(true);
    fixture.detectChanges();
    expect(logInOutElement.nativeElement.textContent.trim()).toBe('Logout');
  });
  
  it('should show Newblog button if logged in and vice versa', ()=>{
    expect(newblogElement.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(newblogElement.nativeElement.textContent.trim()).toBe('');
    spyOn(component, 'checkIfLoggedIn').and.returnValue(true);
    fixture.detectChanges();
    expect(newblogElement.nativeElement.textContent.trim()).toBe('Newblog');        
  });

  it('should show Register button if logged out and vice versa', ()=>{
    expect(registerElement.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(registerElement.nativeElement.textContent.trim()).toBe('Register');
    spyOn(component, 'checkIfLoggedIn').and.returnValue(true);
    fixture.detectChanges();
    expect(registerElement.nativeElement.textContent.trim()).toBe('');        
  });






  //async
  xit('should show Login button if not logged in and vice versa (ASYNC)', async()=>{
    fixture.detectChanges();
    expect(logInOutElement.nativeElement.textContent.trim()).toBe('Login');
    console.log('needsloginBefore', component.needsLogin);
    
    // let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    // await component.ngOnInit();

    // fixture.whenStable().then(()=>{
      fixture.detectChanges();
      console.log('needsloginAfter', component.needsLogin);
      expect(logInOutElement.nativeElement.textContent.trim()).toBe('Logout');
    // });

    
  });
  //async
  xit('should show Newblog button if not logged in and vice versa (ASYNC)', async()=>{
    fixture.detectChanges();
    expect(newblogElement.nativeElement.textContent.trim()).toBe('');
    console.log('needsloginBefore', component.needsLogin);
    
    // let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    // await component.ngOnInit();

    // fixture.whenStable().then(()=>{
      fixture.detectChanges();
      console.log('needsloginAfter', component.needsLogin);
      expect(newblogElement.nativeElement.textContent.trim()).toBe('Newblog');
    // });

    
  });

  xit('should show Register button if not logged in and vice versa (ASYNC)', async()=>{
    fixture.detectChanges();
    expect(registerElement.nativeElement.textContent.trim()).toBe('Register');
    console.log('needsloginBefore', component.needsLogin);
    
    // let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    // await component.ngOnInit();

    // fixture.whenStable().then(()=>{
      fixture.detectChanges();
      console.log('needsloginAfter', component.needsLogin);
      expect(registerElement.nativeElement.textContent.trim()).toBe('');
    // });

    
  });

  
  
});

