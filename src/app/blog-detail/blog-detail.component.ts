import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../services/blog/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.blogService.getBlog(id)
       .subscribe(blog => this.blog = blog
    )
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.deleteBlog(id)
      .subscribe(() => this.goToBlogs());
  }

  goToBlogs(): void {
    this.router.navigate(['blogs']);  }
  
  checkIfLoggedIn(): boolean {
    return !!window.localStorage['jwtToken'];
  }
}
