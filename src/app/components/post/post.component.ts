import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component( {
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.css' ]
} )
export class PostComponent implements OnInit {
  post: Post | any
  constructor (
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params[ 'id' ]
      this.post = this.postService.getById( id )
    } )
  }

}
