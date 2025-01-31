import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiStoresService } from '../../services/api-stores.service';
import { Observable } from 'rxjs';
import { ProductMainComponent } from './product-main/product-main.component';
import { optionProduts } from './product-main/product-main.models';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ ProductMainComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  fecha: Date = new Date();


  products: any = [];
  //opciones de tipo de productos
  optionProduts: any = [];
  //informacion de los products
  infoHeader:any = []

  ngOnInit(): void {

    this.optionProduts = optionProduts
    this.infoHeader = [
      {image:'icons8-casa-96.png',text:"Fast Get start",info:"Time full"},
      {image:'product.png',text:"Good Calidad",info:"More very "},
      {image:'tools.png',text:"Remborso",info:"Garantizado"}
    ]
  }
}
