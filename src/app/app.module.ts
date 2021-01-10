import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListmaterielComponent } from './listmateriel/listmateriel.component';
import { MaterielComponent } from './materiel/materiel.component';
import { DetailmaterielComponent } from './detailmateriel/detailmateriel.component';
import { CommentComponent } from './detailmateriel/commentaires/comment/comment.component';
import { ContactComponent } from './composants/contact/contact.component';
import { Error404Component } from './composants/error404/error404.component';
import { MenuComponent } from './composants/menu/menu.component';
import { AddcommentComponent } from './commentaires/addcomment/addcomment.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent,
    CommentComponent,
    ContactComponent,
    Error404Component,
    MenuComponent,
    AddcommentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
