import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";


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
      return "yes";
    } else{
      this.router.navigate(["blogs"]);
    }
  }

  goBack(): void {
    this.location.back();
  }

  create(title: string, image: string, body: string): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.blogService.saveNewBlog({title, image, id, body} as Blog)
       .subscribe(() => this.goBack());
  }

  
  
}
