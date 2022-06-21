import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component( {
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
} )
export class FormComponent implements OnInit {
  newPost: FormGroup
  constructor (
    private postsService: PostService
  ) {
    this.newPost = new FormGroup(
      {
        titulo: new FormControl( '', [] ),
        autor: new FormControl( '', [] ),
        imagen: new FormControl( '', [] ),
        fecha: new FormControl( '', [] ),
        categoriaString: new FormControl( '', [] ),
        texto: new FormControl( '', [] ),
      }, []
    )
  }

  ngOnInit (): void {
  }
  getDataForm () {
    this.postsService.addPost( this.newPost.value )
  }
}
