import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/authorization/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(  
    private authService: AuthService,
  ) { }

  email: string;
  password: string;

  doLogin() {
    this.authService.login(this.email, this.password)
    .subscribe((resp) => {
      this.authService.loginCallback(resp);
    });
  } 
      
  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  checkIfLoggedIn(): boolean {
    return !!window.localStorage['jwtToken'];
  }

}
