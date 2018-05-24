import { Component } from '@angular/core';
import {AuthService} from './services/authorization/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  needsLogin: boolean = true;
  constructor(private authService: AuthService) {
                
  }

  checkIfLoggedIn(): boolean {
    return !!window.localStorage['jwtToken'];
  }

  logOut(): void {
    window.localStorage.removeItem('jwtToken');    
  }
}
