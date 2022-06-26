import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PathErrorComponent } from './components/path-error/path-error.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: BlogComponent },
  { path: 'new-post', component: FormComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'categoria/:id', component: BlogComponent },
  { path: '**', component: PathErrorComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
