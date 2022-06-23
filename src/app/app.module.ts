import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { PathErrorComponent } from './components/path-error/path-error.component';
import { CardComponent } from './components/card/card.component';
import { PostComponent } from './components/post/post.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';


registerLocaleData( localeEs, 'es' )
@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    PathErrorComponent,
    CardComponent,
    PostComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
