import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  title: string = '';
  body: string = '';

  constructor(private router: Router) {}

  createPost(): void {
    console.log('Creating post with title:', this.title, 'and body:', this.body);
    this.router.navigate(['/dashboard']);
  }
}
