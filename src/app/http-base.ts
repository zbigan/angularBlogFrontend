import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpBase extends HttpClient {
    constructor(
        private handlerr: HttpHandler
    ) {
        super(handlerr);
     }

    httpPost(tobeposted: any, url: string): Observable<any> {
        return this.post<any>(url, tobeposted, {
          headers: this.buildHeaders()
        })
        .pipe(
            catchError(this.handleError<any>('new httprequest'))
        );
      
    }

    httpGet(url: string): Observable<any> {
        return this.get<any>(url, {
            headers: this.buildHeaders()
        }).pipe(
            catchError(this.handleError<any>('new httprequest'))
        );
    }

    httpPut(tobeputted: any, url: string): Observable<any> {
        return this.put<any>(url, tobeputted, {
          headers: this.buildHeaders()
        }).pipe(
            catchError(this.handleError<any>('new httprequest'))
        );
      
    }

    httpDelete(url: string): Observable<any> {
        return this.delete<any>(url, {
            headers: this.buildHeaders()
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

    getToken(): string {
        return window.localStorage['jwtToken'];
    }

}