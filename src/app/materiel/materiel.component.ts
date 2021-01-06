import { Component, Input, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
@Input("mat")materiel ;
  constructor() { }

  ngOnInit(): void {
  }

}
