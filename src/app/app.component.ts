import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {BlogService} from './blog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService,
              private blogService: BlogService) {
                
  }

  checkIfLoggedIn(): string {
    return this.authService.getToken()
  }

  logOut(): void {
    this.authService.logout()
  }
}
