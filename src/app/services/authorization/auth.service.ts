import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpBase } from '../../http-base';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {
  constructor(
    private toastr: ToastrService,
    private httpBase: HttpBase
  ) { }

  login(email: string, password: string) {
    return this.httpBase.httpPost({
        email: email,
        password: password
      }, 
      environment.baseUrl+'/login'
    );
  }

  loginCallback(resp) {
    !resp  ? (
      this.toastr.error('Wrong email or password.')
      
    ) : (
        this.saveToken(resp.token),
        this.toastr.success((resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!'))
      )
  }

  
  logout() {
    this.destroyToken();
    // this.loggedIn.next(false);
  }

  isAuthenticated(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('jwtToken'));
  }



  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
