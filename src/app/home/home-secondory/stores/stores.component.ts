import { Component, Input, OnInit } from '@angular/core';
import {  ProductList, ProductListnew } from '../../../models/localDatos.moduls';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent implements OnInit {

  datos:ProductList[] = ProductListnew;
  @Input() stores?: any[];
  newdatos?:any



ngOnInit(): void {

if(this.stores == undefined){
  this.stores = ProductListnew
}

console.log(this.newdatos)

}
}
