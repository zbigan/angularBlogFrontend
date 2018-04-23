import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class BlogService {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService

  ) { }
  
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('http://localhost:8001/blogs', {
      headers: this.authService.buildHeaders()
    })
      .pipe(
        // tap(blogs => this.log(`fetched blogs`)),
        catchError(this.handleError('getBlogs', []))
      );
  }

  getBlog(id: string): Observable<Blog> {
    
    return this.http.get<Blog>(`http://localhost:8001/detail/${id}`, {
      headers: this.authService.buildHeaders()
    }).pipe(
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );  
  }


  updateBlog(blog: Blog): Observable<any> {
    // const id = this.route.snapshot.paramMap.get('id');
    console.log("id="+blog.id);
    return this.http.put(`http://localhost:8001/detail/${blog.id}`, blog, {
      headers: this.authService.buildHeaders()
    }).pipe(
      catchError(this.handleError<any>(`updateBlog id=${blog.id}`))
    );
  }

  saveNewBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>('http://localhost:8001/blogs', blog, {
      headers: this.authService.buildHeaders()
    }).pipe(
      catchError(this.handleError<any>('newBlog'))
    );
  }

  deleteBlog(id: string): Observable<Blog> {
    return this.http.delete<Blog>(`http://localhost:8001/detail/${id}`, {
      headers: this.authService.buildHeaders()
    }).pipe(
      catchError(this.handleError<Blog>('deleteBlog'))
    )
  }

  

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
