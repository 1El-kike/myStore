import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, NgIf, NgStyle } from '@angular/common';
import { Image, Product, productList } from '../../models/localDatos.moduls';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe,NgStyle,NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit  {

  productId: string = '';
  image = "";

  productList:Product[] = productList;
  loading : boolean = true;
  data? :Product;
  imge?:Image[] =[];
  expression = '80%'
  expression2 = '60%'
  constructor(private _router : ActivatedRoute){

  }



  ngOnInit(): void {
    this._router.params.subscribe(params => {

        this.productId = params['productId']
        this.data = this.productList.find(element => element.id == params['productId'])
        this.loading = false;
        this.imge = this.data?.image ;
        console.log(this.imge)

      },)


      // Este metodo esta viejo
      /*  for (let index = 0; index < productList.length; index++) {
        if (this.productId == this.productList[index].id ) {
          this.data = [this.productList[index] ]
        } */

      }




}
