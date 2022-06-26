import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';
import { CategoriasService } from './categorias.service';

@Injectable( {
  providedIn: 'root'
} )
export class PostsService {
  private arrPosts: Post[] = []
  private id: number = 12
  constructor (
    private categoriasService: CategoriasService
  ) {
    this.arrPosts = POSTS
  }
  ngDoCheck () {
    this.arrPosts = POSTS
  }
  getAll (): Post[] {
    return this.arrPosts
  }
  getById ( id: string ): Post | any {
    return this.arrPosts.find( post => post.id === parseInt( id ) )
  }
  getAllByCategory ( categoriaId: string ) {
    let postReturn: Post[] | undefined = []
    this.arrPosts.forEach( post => post.categorias.forEach( categoria => {
      if ( parseInt( categoriaId ) === categoria ) {
        postReturn?.push( post )
      }
    } ) )
    return postReturn
  }
  addPost ( post: any ) {
    post.id = this.id
    post.categorias = this.categoriasService.addNoFiltered( post.categoriaString )
    delete post.categoriaString
    this.arrPosts.push( post )
    this.id++
  }
}
