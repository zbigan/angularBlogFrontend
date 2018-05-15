import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailComponent,
    BlogEditComponent,
    BlogNewComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    BlogService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
