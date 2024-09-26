import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiStoresService } from '../../../services/api-stores.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [AsyncPipe,CurrencyPipe],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css'
})
export class ProductMainComponent {
//datos de products
products$?: Observable<any>;
//tipos de calificacion de products
typeproduct:any

private _API = inject(ApiStoresService)

ngOnInit(): void {

  this.products$ = this._API.getAllproducts('allProducts');
  this.typeproduct = [
    {type:"Food",img:"food.png",category:[
      {
      name:"Bebidas",
      img:'/category/bebidas.jpg' },
    {
      name:"Cakes",
      img:'/category/cakes.jpg',
    },
    {
      name:"Carnes",
      img:'/category/carne.jpg',
    },
    {
      name:"vegetales",
      img:'/category/vegetal.png',
    },
    {
      name:"Dulce",
      img:'/category/dulce.jpg',
    },{
      name:"Lacteos",
      img:'/category/lacteos.jpg',
    },{
      name:"Procesado",
      img:'/category/procesado.jpg',
    },
    {
      name:"Helados",
      img:'/category/helado.jpg',
    }
  ]},
    {type:"Clothes",img:"shoe.png"},
    {type:"Provisions",img:"bienes.png"},
    {type:"Jeweler",img:"anillo.png"},
  ]
}
}
