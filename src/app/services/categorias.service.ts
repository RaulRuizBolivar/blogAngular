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
  getAllById ( arrId: number[] ): Category[] | undefined {
    let categoriasReturn: Category[] | undefined = []
    for ( let id of arrId ) {
      categoriasReturn.push( this.arrCategorias.filter( categoria => categoria.id === id )[ 0 ] )
    }
    return categoriasReturn
  }
  addNoFiltered ( categorias: string[] ): void {
    categorias = [ ... new Set( categorias ) ]
    console.log( this.arrCategorias )
    if ( this.arrCategorias.filter( cat => categorias.includes( cat.titulo ) ) ) {
      //no hay coincidencias con las categorias existentes
      console.log( this.arrCategorias )
      categorias.forEach( cat => {
        let categoria: Category = { titulo: cat, id: this.id }
        this.arrCategorias.push( categoria )
        this.id++
      }
      )
    } else {
      //Si hay alguna categoria que se llama igual
    }

  }
}
