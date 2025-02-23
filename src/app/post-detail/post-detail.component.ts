import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  postId: number | null = null;
  post = { title: '', body: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      // Here, you should fetch the post from your backend using the postId.
      // For now, we'll use dummy data.
      this.post = { title: 'Post ' + this.postId, body: 'Details of post ' + this.postId };
    });
  }
}
