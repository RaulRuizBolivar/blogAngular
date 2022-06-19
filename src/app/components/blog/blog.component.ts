import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component( {
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.css' ]
} )
export class BlogComponent implements OnInit {
  posts: Post[] = []
  constructor (
    private postService: PostService
  ) { }

  ngOnInit (): void {
    this.posts = this.postService.getAll()
  }

}
