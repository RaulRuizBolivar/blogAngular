import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {
  categorias: Category[]
  constructor ( private categoriasService: CategoriasService ) {
    this.categorias = this.categoriasService.getAll()
  }

  ngOnInit (): void {
  }

}