import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authorization/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loggedIn;

  constructor(  
    private authService: AuthService,
  ) { 
    // this.authService.loggedIn
    //   .subscribe(loggedIn => this.loggedIn = loggedIn);

    }

  doLogin(email, password) {
    this.authService.login(email, password)
    .subscribe((resp) => {
      this.authService.loginCallback(resp);
    });
  } 
      
  doLogout() {
    this.authService.logout();
  }

  checkIfLoggedIn(): boolean {
    return !!this.authService.getToken();
  }

}
