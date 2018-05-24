import { Injectable } from '@angular/core';
import { Blog } from '../../blog';
import { HttpBase } from '../../http-base';
import { environment } from '../../../environments/environment';


@Injectable()
export class BlogService {
  constructor(
    private httpBase: HttpBase
  ) { }
  
  getBlogs() {
    return this.httpBase.httpGet(environment.baseUrl+'/blogs');
  }

  getBlog(id: string) {
    
    return this.httpBase.httpGet(environment.baseUrl+`/blogs/${id}`);
  }

  updateBlog(blog: Blog, id:string) {
    return this.httpBase.httpPut(blog, environment.baseUrl+`/blogs/${id}`);
  }

  saveNewBlog(blog: Blog) {
    return this.httpBase.httpPost(blog, environment.baseUrl+'/blogs');
  }

  deleteBlog(id: string) {
    return this.httpBase.httpDelete(environment.baseUrl+`/blogs/${id}`);
  }

}
