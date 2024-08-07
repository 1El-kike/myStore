import {  Todos } from './../cliente-api.service';
import { Component,  OnInit } from '@angular/core';
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

  image: string = '/fondo.jpg';
  todus: Todos[] = [];
  constructor(){}

  ngOnInit(): void {


  }

}
