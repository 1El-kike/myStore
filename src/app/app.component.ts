import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/store/product/product.component';
import { ProductDetailComponent } from '../app/components/store/product-detail/product-detail.component';
import { NgClass } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FondoComponent } from './components/fondo/fondo.component';
import * as AOS from "aos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    RouterModule,
    NgClass,
    MenuComponent,
    FooterComponent,
    FondoComponent,
    FondoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'Store';
  menuOption = '';

  onOption(option: string) {
    this.menuOption = option;
  }
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
}
