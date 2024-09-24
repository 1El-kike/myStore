import { AsyncPipe, CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiStoresService } from '../../services/api-stores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink, AsyncPipe, NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  fecha: Date = new Date();

  //datos de products
  products$?: Observable<any>;
  products: any = [];
  menus: any = [
    {
      name: 'Food',
      address: '',
    },
    {
      name: 'Choping',
      address: '',
    },
    {
      name: 'Closet',
      address: '',
    },
    {
      name: 'Tools',
      address: '',
    },
  ];

  private _API = inject(ApiStoresService);
  // hora de trabajara aqui
  ngOnInit(): void {
    this.products$ = this._API.getAllproducts('allProducts');
  }
}
