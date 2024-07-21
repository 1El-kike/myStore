import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass,NgIf, RouterLink  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
   animations: [
    trigger('flyoutMenu', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(1rem)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(1rem)' })),
      ]),
    ])
  ]
})
export class MenuComponent {

  title: string = 'Store';


  isOpenDrow = false;
  isOpenMenu = false;

  toggleMenu() {
    this.isOpenDrow = !this.isOpenDrow;
  }
  toggleMenulateral(){
    this.isOpenMenu = !this.isOpenMenu;
    console.log(this.isOpenMenu)
  }

  exitMenu (){
    this.isOpenDrow = false;
  }

}
