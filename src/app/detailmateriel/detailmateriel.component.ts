import { Component, OnInit } from '@angular/core';
import{Materiel}from './../models/materiel'
import{MaterielService}from'../services/materiel.service';
@Component({
  selector: 'app-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  materiel:Materiel ;
test :boolean=false;

 onaffiche(){
   this.test=true;
   

      
      
    
    
}


  


  constructor(private listmateriel:MaterielService) { }

  ngOnInit(): void {
    this.materiel=this.listmateriel.getMaterielById('2');
    

}
}
