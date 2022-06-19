import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Post } from 'src/app/interfaces/post';
import { CategoriasService } from 'src/app/services/categorias.service';
import { PostService } from 'src/app/services/post.service';

@Component( {
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.css' ]
} )
export class PostComponent implements OnInit {
  post: Post | any
  categorias: Category[] | any
  constructor (
    private postService: PostService,
    private categoriasService: CategoriasService,
    private activatedRoute: ActivatedRoute
  ) {
    this.categorias = []
  }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params[ 'id' ]
      this.post = this.postService.getById( id )
    } )
    this.categorias = this.categoriasService.getAllById( this.post.categorias )
  }

}
