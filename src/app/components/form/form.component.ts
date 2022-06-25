import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
          Validators.required,
          this.urlValidator
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
  urlValidator ( controlName: AbstractControl ) {
    const url = controlName.value
    const regExp = /https?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi
    return ( !regExp.test( url ) ) ? { urlValidator: 'La url no es valida' } : null
  }
  ngOnInit (): void {
  }
  getDataForm () {
    this.postsService.addPost( this.newPost.value )
    this.router.navigate( [ '/home' ] )
  }
  checkControl ( errorName: string, ...controlName: string[] ): boolean {
    let tieneError: boolean[] = []
    controlName.forEach( input => {
      if ( this.newPost.get( input )?.hasError( errorName ) && this.newPost.get( input )?.touched ) {
        tieneError.push( false )
      }
      tieneError.push( true )
    } )
    return ( tieneError.find( input => input === false ) !== undefined ) ? true : false
  }
}
