import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';

@Injectable( {
  providedIn: 'root'
} )
export class PostService {
  private arrPosts: Post[] = []
  constructor () {
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
}
