import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../services/blog/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/authorization/auth.service';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  @Input() blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    private router: Router,
    private authService: AuthService
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


  goToBlog(): void {
    const id = this.route.snapshot.paramMap.get('id');    
    this.router.navigate([`blogs/${id}`]);  
  }

  update(title: string, image: string, body: string): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.updateBlog({title, image, body} as Blog, id)
      .subscribe(() => this.goToBlog());
  }

  checkIfLoggedIn(): boolean {
    return !!this.authService.getToken();
  }
}
