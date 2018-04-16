import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BlogService {
  
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('http://blooming-dawn-30284.herokuapp.com/blogs')
      .pipe(
        // tap(blogs => this.log(`fetched blogs`)),
        catchError(this.handleError('getBlogs', []))
      );
  }

  getBlog(id: string): Observable<Blog> {
    
    return this.http.get<Blog>(`http://blooming-dawn-30284.herokuapp.com/detail/${id}`, {
      headers: this.authService.buildHeaders()
    }).pipe(
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );  
  }


  updateBlog(blog: Blog): Observable<any> {
    // const id = this.route.snapshot.paramMap.get('id');
    console.log("id="+blog.id);
    return this.http.put(`http://blooming-dawn-30284.herokuapp.com/detail/${blog.id}`, blog, httpOptions).pipe(
      catchError(this.handleError<any>(`updateBlog id=${blog.id}`))
    );


    // .pipe(
    //   catchError(this.handleError<Blog>(`getBlog id=${id}`))
    // ); 
  }

  saveNewBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>('http://blooming-dawn-30284.herokuapp.com/blogs', blog, httpOptions).pipe(
      catchError(this.handleError<any>('newBlog'))
    );
  }

  deleteBlog(id: string): Observable<Blog> {
    return this.http.delete<Blog>(`http://blooming-dawn-30284.herokuapp.com/detail/${id}`, httpOptions).pipe(
      catchError(this.handleError<Blog>('deleteBlog'))
    )
  }

  


  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      //this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService

  ) { }

}
