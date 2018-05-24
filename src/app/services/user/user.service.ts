import { Injectable } from '@angular/core';
import { User } from '../../user';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpBase } from '../../http-base';
import { AuthService } from '../authorization/auth.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class UserService extends HttpBase {

  constructor(
    public handlerrr: HttpHandler,
    private authservice: AuthService
  ) {super(handlerrr)}



  saveNewUser(user: User) {
    return this.httpPost(user, environment.baseUrl+'/users');
  }

}
