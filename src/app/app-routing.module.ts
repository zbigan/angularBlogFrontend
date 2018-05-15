import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs/:id', component: BlogDetailComponent},
  { path: 'blogs/:id/edit', component: BlogEditComponent},
  { path: 'blogs/new', component: BlogNewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})

export class AppRoutingModule { }
