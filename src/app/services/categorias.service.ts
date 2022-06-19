import { Injectable } from '@angular/core';
import { CATEGORIAS } from '../db/category.db';
import { Category } from '../interfaces/category';

@Injectable( {
  providedIn: 'root'
} )
export class CategoriasService {
  private arrCategorias: Category[] = []
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
}
