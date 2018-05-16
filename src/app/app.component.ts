import { Component } from '@angular/core';
import {AuthService} from './services/authorization/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {
                
  }

  checkIfLoggedIn(): string {
    return this.authService.getToken()
  }

  logOut(): void {
    this.authService.logout()
  }
}
