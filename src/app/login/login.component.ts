import { Component, OnInit } from '@angular/core';
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

  doLogin(email, password) {
    this.authService.login(email, password)
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
