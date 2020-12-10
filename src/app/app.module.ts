import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListmaterielComponent } from './listmateriel/listmateriel.component';
import { MaterielComponent } from './materiel/materiel.component';
import { DetailmaterielComponent } from './detailmateriel/detailmateriel.component';
import { CommentComponent } from './detailmateriel/commentaires/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent,
    CommentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
