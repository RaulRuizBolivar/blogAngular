import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component( {
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.css' ]
} )
export class BlogComponent implements OnInit {
  posts: Post[] = []
  constructor (
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe( params => {
      if ( params[ 'id' ] === '0' || !params[ 'id' ] ) {
        this.posts = this.postsService.getAll()
      } else {
        this.posts = this.postsService.getAllByCategory( params[ 'id' ] )
      }
    } )
  }

}
