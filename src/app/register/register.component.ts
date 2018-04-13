import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private location: Location,
    private userService: UserService

  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  createUser(name: string, email: string, password: string): void {
    this.userService.saveNewUser({name, email, password} as User)
       .subscribe(() => this.goBack());
  }

}
