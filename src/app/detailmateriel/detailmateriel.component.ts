import { Component, OnInit } from '@angular/core';
import{Materiel}from './../models/materiel'
import{MaterielService}from'../services/materiel.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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

  constructor(private listmateriel:MaterielService , private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    let id = this.activatedRoute.snapshot.params['is'];
    this.materiel=this.listmateriel.getMaterielById(id);
   

}
Onretour(){
 this.router.navigate(['/listmateriel']);
}
}
