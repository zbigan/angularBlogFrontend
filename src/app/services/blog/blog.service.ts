import { Injectable } from '@angular/core';
import { Blog } from '../../blog';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { HttpBase } from '../../http-base';
import { AuthService } from '../authorization/auth.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class BlogService extends HttpBase {
  constructor(
    private handlerrr: HttpHandler,
    private authservice: AuthService
  ) {
    super(handlerrr);  
   }
  
  getBlogs() {
    return this.httpGet(environment.baseUrl+'/blogs');
  }

  getBlog(id: string) {
    
    return this.httpGet(environment.baseUrl+`/blogs/${id}`);
  }

  updateBlog(blog: Blog, id:string) {
    return this.httpPut(blog, environment.baseUrl+`/blogs/${id}`);
  }

  saveNewBlog(blog: Blog) {
    return this.httpPost(blog, environment.baseUrl+'/blogs');
  }

  deleteBlog(id: string) {
    return this.httpDelete(environment.baseUrl+`/blogs/${id}`);
  }

}
