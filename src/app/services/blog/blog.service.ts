import { Injectable } from '@angular/core';
import { Blog } from '../../blog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpBase } from '../../http-base';
import { AuthService } from '../authorization/auth.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class BlogService extends HttpBase {
  constructor(
    public http: HttpClient,
    private authservice: AuthService
  ) {
    super(http);  
   }
  
  getBlogs() {
    return this.httpGet(environment.baseUrl+'/blogs', this.authservice.buildHeaders());
  }

  getBlog(id: string) {
    
    return this.httpGet(environment.baseUrl+`/blogs/${id}`, this.authservice.buildHeaders());
  }

  updateBlog(blog: Blog, id:string) {
    return this.httpPut(blog, environment.baseUrl+`/blogs/${id}`, this.authservice.buildHeaders());
  }

  saveNewBlog(blog: Blog) {
    return this.httpPost(blog, environment.baseUrl+'/blogs', this.authservice.buildHeaders());
  }

  deleteBlog(id: string) {
    return this.httpDelete(environment.baseUrl+`/blogs/${id}`, this.authservice.buildHeaders());
  }

}
