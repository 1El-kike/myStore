import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiStoresService } from '../../services/api-stores.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink, NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  fecha: Date = new Date();

  //datos de products
  products: any = [];

  private _API = inject(ApiStoresService);

  ngOnInit(): void {
    this._API.getAllproducts('allProducts').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
