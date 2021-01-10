import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commentaire } from 'src/app/models/commentaire';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {
  @Input()mat:Materiel;
com:Commentaire={
  contenu:"bien",
        note: 2,
        auteur: "Sami Sassi",
        date: new Date(),
}

  constructor(private islemService:MaterielService) { }

  ngOnInit(): void {
  }
  onAjoute(f:NgForm){
    let c:Commentaire=Object.assign({},this.com);
    c.date=new Date();
    this.islemService.ajouterCommentaire(this.mat,c);
    f.reset();

  }
}
