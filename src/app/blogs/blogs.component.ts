import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../services/blog/blog.service';
import { AuthService } from '../services/authorization/auth.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[];

  constructor(
    private authService: AuthService,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }
  
  checkIfLoggedIn(): boolean {
    return !!this.authService.getToken();
  }

}
