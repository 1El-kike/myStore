import { Component, EventEmitter } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './store/product/product.component';
import { ProductDetailComponent } from '../app/store/product-detail/product-detail.component';
import { NgClass } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'Store';
  menuOption = '';

  onOption(option: string){
this.menuOption =option;
  }

}
