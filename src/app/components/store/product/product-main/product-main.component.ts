import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiStoresService } from '../../../services/api-stores.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { typeproduct } from './product-main.models';

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

typecategory: any

changeproduct(item:number){
  this.typecategory = this.typeproduct[item].category
console.log(item)
}



private _API = inject(ApiStoresService)

ngOnInit(): void {

  this.products$ = this._API.getAllproducts('allProducts');
  this.typeproduct = typeproduct;
  this.typecategory = this.typeproduct[0].category;
  console.log(this.typecategory)
  //typeproduct[0].category
}
}
