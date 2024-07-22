import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgIf,CurrencyPipe],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  @Input() isOpenMenu?:boolean ;

  exitMenu(){
    this.isOpenMenu = false;
  }
}
