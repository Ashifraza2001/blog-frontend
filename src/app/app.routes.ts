import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'post/:id', component: PostDetailComponent }
];
