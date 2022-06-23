import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component( {
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
} )
export class FormComponent implements OnInit {
  newPost: FormGroup
  constructor (
    private postsService: PostsService,
    private router: Router
  ) {
    this.newPost = new FormGroup(
      {
        titulo: new FormControl( '', [
          Validators.required
        ] ),
        autor: new FormControl( '', [
          Validators.required,
          Validators.minLength( 3 )
        ] ),
        imagen: new FormControl( '', [
          Validators.required
        ] ),
        fecha: new FormControl( '', [
          Validators.required
        ] ),
        categoriaString: new FormControl( '', [
          Validators.required
        ] ),
        texto: new FormControl( '', [
          Validators.required
        ] ),
      }, []
    )
  }

  ngOnInit (): void {
  }
  getDataForm () {
    this.postsService.addPost( this.newPost.value )
    this.router.navigate( [ '/home' ] )
  }
}