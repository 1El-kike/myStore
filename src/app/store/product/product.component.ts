import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productList } from './product.mock';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    RouterLink,
    NgClass
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  fecha: Date = new Date()
  productList = productList;

  ngOnInit(): void {
    console.log(productList)
  }
}
