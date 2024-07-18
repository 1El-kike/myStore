import { ClienteApiService, Todos } from './../cliente-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FindItemsComponent } from "./find-items/find-items.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FindItemsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  image: string = 'https://media.istockphoto.com/id/1625128632/es/foto/alimentos-para-alergias-m%C3%A1s-comunes-inyectados-desde-arriba.jpg?b=1&s=612x612&w=0&k=20&c=mmeXXobAcSzDCGPK7glMGUpWWLyik3t-xrke528hTpA=';
  todus: Todos[] = [];
  constructor(){}

  ngOnInit(): void {


  }

}
