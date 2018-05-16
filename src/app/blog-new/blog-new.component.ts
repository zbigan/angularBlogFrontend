import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../services/blog/blog.service';
import { AuthService } from '../services/authorization/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private authService: AuthService,
    private location: Location
  ) { }

  checkToken() {
    if(this.authService.getToken()){
      return 'yes';
    } else{
      this.router.navigate(['blogs']);
    }
  }

  goBack(): void {
    this.location.back();
  }

  create(title: string, image: string, body: string): void {
    this.blogService.saveNewBlog({title, image, body} as Blog)
       .subscribe(() => this.goBack());
  }

  
  
}
