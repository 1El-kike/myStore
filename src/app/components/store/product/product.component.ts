import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiStoresService } from '../../services/api-stores.service';
import { Observable } from 'rxjs';
import { ProductMainComponent } from './product-main/product-main.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ DatePipe, RouterLink, AsyncPipe,ProductMainComponent, NgClass],
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

    this.optionProduts = [
      {
        name: 'Food',
        address: '',
        icon:'/food.png'
      },
      {
        name: 'Clothes',
        address: '',
        icon:'shoe.png'

      },
      {
        name: 'provisions',
        address: '',
        icon:'bienes.png'

      },
      {
        name: "jeweler's",
        address: '',
        icon:'anillo.png'

      },
    ]
    this.infoHeader = [
      {image:'icons8-casa-96.png',text:"Fast Get start",info:"Time full"},
      {image:'product.png',text:"Good Calidad",info:"More very "},
      {image:'tools.png',text:"Remborso",info:"Garantizado"}
    ]
  }
}
