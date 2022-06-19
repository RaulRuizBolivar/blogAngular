import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { CategoriasService } from 'src/app/services/categorias.service';
import { PostService } from 'src/app/services/post.service';

@Component( {
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.css' ]
} )
export class BlogComponent implements OnInit {
  posts: Post[] = []
  constructor (
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe( params => {
      if ( params[ 'id' ] === '0' || !params[ 'id' ] ) {
        this.posts = this.postService.getAll()
      } else {
        this.posts = this.postService.getAllByCategory( params[ 'id' ] )
      }
    } )
  }

}
