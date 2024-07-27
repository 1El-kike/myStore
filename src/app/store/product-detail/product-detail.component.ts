import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, Location, NgIf, NgStyle } from '@angular/common';
import { Image, Product, productList } from '../../models/localDatos.moduls';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe,NgStyle,NgIf,RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit  {

  productId: string = '';
  image = "";

  productList:Product[] = productList;
  loading : boolean = true;
  data? :Product;
  imge?:Image[] =[
    {valor1:'',valor2:'',valor3:'',valor4:''}
  ];
  img1?:any
  img2 = ''
  img3 = ''
  img4 = ''
  expression = '80%'
  expression2 = '60%'
  constructor(private _router : ActivatedRoute, private location: Location){

  }

  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
    this._router.params.subscribe(params => {

        this.productId = params['productId']
        this.data = this.productList.find(element => element.id == params['productId'])
        this.loading = false;

        if (this.data && this.data.image && this.data.image.length > 0) {
          const firstImage = this.data.image[0];
          this.img1 = firstImage.valor1;
          this.img2 = firstImage.valor2;
          this.img3 = firstImage.valor3;
          this.img4 = firstImage.valor4;
        }

        console.log(this.img1)

      },)


      // Este metodo esta viejo
      /*  for (let index = 0; index < productList.length; index++) {
        if (this.productId == this.productList[index].id ) {
          this.data = [this.productList[index] ]
        } */

      }




}
