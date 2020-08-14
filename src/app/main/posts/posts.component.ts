import { Component, OnInit, Input } from '@angular/core';
import { PostInterface } from '../../shared/interface/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss', '../../shared/shared.scss'],
})
export class PostsComponent implements OnInit {
  @Input() public posts: PostInterface[];

  constructor() {}

  ngOnInit(): void {
  }

  /**************************************
   * Like Counter
   **************************************/
  public actionLiked(post: PostInterface) {
    if (!post.likeCounter) {
      post.likeCounter = 0;
    }
    post.likeCounter++;
  }
}
