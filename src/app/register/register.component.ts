import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthService } from '../services/authorization/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  goToLogin(): void {
    this.router.navigate(['login']);      
  }

  createUser(name: string, email: string, password: string): void {
    this.userService.saveNewUser({name, email, password} as User)
       .subscribe((resp) => {
        this.userService.registerCallback(resp);
      });
  }

  checkIfLoggedIn(): boolean {
    return !!window.localStorage['jwtToken'];
  }

}
