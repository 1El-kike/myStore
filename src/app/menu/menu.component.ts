import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  animations: [
    trigger('flyoutMenu', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(1rem)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'translateY(1rem)' })
        ),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnDestroy {
  title: string = 'Store';

  isOpenDrow = false;
  isOpenMenu = false;
  submenuShow = false;
  private unsubcribe: any;

  constructor(private _router: Router) {
    this.unsubcribe = this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isOpenMenu = false;
      }
    });
  }

  toggleMenu() {
    this.isOpenDrow = !this.isOpenDrow;
  }
  toggleMenulateral() {
    this.isOpenMenu = !this.isOpenMenu;
  }
  togglesubmenu() {
    this.submenuShow = !this.submenuShow;
  }
  exitMenu() {
    this.isOpenDrow = false;
  }

  ngOnDestroy(): void {
    if (this.unsubcribe) {
      this.unsubcribe();
    }
  }
}
