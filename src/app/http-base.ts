import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


export class HttpBase {
    constructor(
        public http: HttpClient
    ) { }

    httpPost(tobeposted: any, url: string, headers: HttpHeaders): Observable<any> {
        return this.http.post<any>(url, tobeposted, {
          headers: headers
        })
        .pipe(
            catchError(this.handleError<any>('new httprequest'))
        );
      
    }

    httpGet(url: string, headers: HttpHeaders): Observable<any> {
        return this.http.get<any>(url, {
            headers: headers
        }).pipe(
            catchError(this.handleError<any>('new httprequest'))
        );
    }

    httpPut(tobeputted: any, url: string, headers: HttpHeaders): Observable<any> {
        return this.http.put<any>(url, tobeputted, {
          headers: headers
        }).pipe(
            catchError(this.handleError<any>('new httprequest'))
        );
      
    }

    httpDelete(url: string, headers: HttpHeaders): Observable<any> {
        return this.http.delete<any>(url, {
            headers: headers
        }).pipe(
            catchError(this.handleError<any>('new httprequest'))
        );
    }
    
    
    handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

}
