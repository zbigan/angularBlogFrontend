import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpBase } from '../../http-base';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService extends HttpBase {

  loggedIn: BehaviorSubject<boolean>;

  constructor(
    public http: HttpClient,
    // private toastr: ToastrService
  ) {
    super(http);
    const jwtToken = this.getToken();
    this.loggedIn = new BehaviorSubject<boolean>(jwtToken ? true : false);
  }

  login(email: string, password: string) {
    return this.httpPost({
        email: email,
        password: password
      }, 
      environment.baseUrl+'/login',
      this.buildHeaders()
    );
      
  }

  loginCallback(resp) {
    !resp  ? (
      this.loggedIn.next(undefined)
      // this.toastr.error('Wrong email or password.')
      
    ) : (
        this.loggedIn.next(true),
        this.saveToken(resp.token)
        // this.toastr.success((resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!'))
      )
  }

  
  logout() {
    this.destroyToken();
    this.loggedIn.next(false);
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('userEmail');
  }

  getToken(): string {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  buildHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.getToken()) {
      headersConfig['Authorization'] = `Token ${this.getToken()}`;
    }
    return new HttpHeaders(headersConfig);
}
  

}
