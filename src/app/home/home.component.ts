import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  image: string = '';

  constructor(){

    this.image = 'https://media.istockphoto.com/id/1625128632/es/foto/alimentos-para-alergias-m%C3%A1s-comunes-inyectados-desde-arriba.jpg?b=1&s=612x612&w=0&k=20&c=mmeXXobAcSzDCGPK7glMGUpWWLyik3t-xrke528hTpA='

  }

}
