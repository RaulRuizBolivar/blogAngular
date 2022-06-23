import { Injectable } from '@angular/core';
import { CATEGORIAS } from '../db/category.db';
import { Category } from '../interfaces/category';

@Injectable( {
  providedIn: 'root'
} )
export class CategoriasService {
  private arrCategorias: Category[] = []
  private id: number = 3
  constructor () {
    this.arrCategorias = CATEGORIAS
  }
  getAll () {
    return this.arrCategorias
  }
  getById ( id: number ) {
    return this.arrCategorias.find( categoria => categoria.id === id )
  }
  getAllById ( arrId: number[] ): Category[] | undefined {
    let categoriasReturn: Category[] | undefined = []
    for ( let id of arrId ) {
      categoriasReturn.push( this.arrCategorias.filter( categoria => categoria.id === id )[ 0 ] )
    }
    return categoriasReturn
  }
  addNoFiltered ( categoriasString: string ): number[] {
    let categoriasReturn: number[] = []
    let categorias: string[] = categoriasString.split( ',' )
    categorias = categorias.map( ( categoria: string ) => categoria.trim() )
    categorias = [ ... new Set( categorias ) ]
    //Tengo que cambiar la estrategia y mandar a diferentes funciones dependiendo de cada iteracion de un bucle con cada categoria de categorias
    categorias.forEach( categoria => {
      if ( !this.arrCategorias.some( cat => categoria.toLowerCase() === cat.titulo.toLowerCase() ) ) {
        //no existe la categoria
        let newCategoria: Category = { id: this.id, titulo: categoria }
        this.arrCategorias.push( newCategoria )
        categoriasReturn.push( this.id )
        this.id++
      } else {
        //existe la categoria
        let categoriaExistente: number = this.arrCategorias.findIndex( cat => cat.titulo === categoria )
        console.log( this.arrCategorias[ categoriaExistente ].id )
        categoriasReturn.push( this.arrCategorias[ categoriaExistente ].id )
      }
    } )
    return categoriasReturn
  }
}
