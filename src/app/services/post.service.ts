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
}