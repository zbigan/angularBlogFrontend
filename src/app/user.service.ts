import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  saveNewUser(user: User): Observable<User> {
    return this.http.post<User>('http://blooming-dawn-30284.herokuapp.com/users', user, httpOptions).pipe(
      catchError(this.handleError<any>('newUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
