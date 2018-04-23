import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog: Blog;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private authService: AuthService,
    private location: Location
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
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  
  checkToken() {
    if(this.authService.getToken()){
      return "yes";
    } else{
      this.router.navigate(["blogs"]);
    }
  }
}
