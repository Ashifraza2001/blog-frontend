import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  posts = [
    { id: 1, title: 'Post 1', body: 'This is the first post' },
    { id: 2, title: 'Post 2', body: 'This is the second post' }
  ];

  constructor(private router: Router) {}

  navigateToCreatePost(): void {
    this.router.navigate(['/create-post']);
  }

  viewPostDetails(postId: number): void {
    this.router.navigate([`/post/${postId}`]);
  }
}
