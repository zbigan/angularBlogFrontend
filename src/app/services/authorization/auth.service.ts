import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpBase } from '../../http-base';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService extends HttpBase {

  loggedIn: BehaviorSubject<boolean>;

  constructor(
    private handlerrr: HttpHandler,
    private toastr: ToastrService
  ) {
    super(handlerrr);
    const jwtToken = this.getToken();
    this.loggedIn = new BehaviorSubject<boolean>(jwtToken ? true : false);
  }

  login(email: string, password: string) {
    return this.httpPost({
        email: email,
        password: password
      }, 
      environment.baseUrl+'/login'
    );
  }

  loginCallback(resp) {
    !resp  ? (
      this.loggedIn.next(undefined),
      this.toastr.error('Wrong email or password.')
      
    ) : (
        this.loggedIn.next(true),
        this.saveToken(resp.token),
        this.toastr.success((resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!'))
      )
  }

  
  logout() {
    this.destroyToken();
    this.loggedIn.next(false);
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('userEmail');
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
