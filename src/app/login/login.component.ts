import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email;
  password;
  loggedIn;

  constructor(  
    private authService: AuthService,
    private toastr: ToastrService 
  ) { 
    this.authService.loggedIn
      .subscribe(
        (loggedIn) => {
          this.loggedIn = loggedIn;
        }
      );

    }

  doLogin() {
    this.authService.login(this.email, this.password)
    .subscribe((resp) => {
      this.authService.loginCallback(resp);
    });
  } 
      
  doLogout() {
    this.authService.logout();
  }

  checkLoggedIn(): string {
    return this.authService.getToken();
  }

}
