import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private location: Location,
    private userService: UserService,
    private router: Router,
    private authService: AuthService

  ) { }


  goBack(): void {
    this.location.back();
  }

  createUser(name: string, email: string, password: string): void {
    this.userService.saveNewUser({name, email, password} as User)
       .subscribe(() => this.goBack());
  }

  checkToken() {
    if(!this.authService.getToken()){
      return 'yes';
    } else{
      this.router.navigate(['blogs']);
    }
  }

}
