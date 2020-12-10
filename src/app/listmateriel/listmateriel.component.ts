import { Component, OnInit } from '@angular/core';
import{MaterielService}from'../services/materiel.service';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  materiels=[];
    

  constructor(private listemateriel:MaterielService) { }

  ngOnInit(): void {
    this.materiels=this.listemateriel.getMateriel();
  }

}
