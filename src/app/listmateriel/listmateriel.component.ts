import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  materiels= [
    {nom:'ecran', image:'assets/Informatique/ecran.png' ,prix:"400.3Dt",qtn:4,hautegamme:"true"},
    {nom:'PCFIXE', image:'assets/Informatique/pcFixe.jpg',prix:"1780.6Dt",qtn:3,hautegamme:"false"},
    {nom:'imprimante', image:'assets/Informatique/imprimante.jpg',prix:"420Dt",qtn:2,hautegamme:"false"},
    {nom:'PC Portable', image:'assets/Informatique/pcPortable.png',prix:"2250Dt",qtn:5,hautegamme:"true"},
    {nom:'scanner', image:'assets/Informatique/scanner.jpg',prix:"1000Dt",qtn:0}
    ]
    

  constructor() { }

  ngOnInit(): void {
  }

}
