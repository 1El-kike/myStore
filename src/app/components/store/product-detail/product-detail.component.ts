import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, Location, NgIf, NgStyle } from '@angular/common';
import { ApiStoresService } from '../../services/api-stores.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, NgStyle, NgIf, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  //id que se pasa por params de la url del product
  productId: string = '';
  //datos de todos los products
  allproducts: any[] = [];
  // datos del producto actual
  product: any = [];
  image = '';
  loading: boolean = true;

  img1?: any;
  img2 = '';
  img3 = '';
  img4 = '';
  expression = '80%';
  expression2 = '60%';
  //services inyect
  private _API = inject(ApiStoresService);
  private _router = inject(ActivatedRoute);
  private location = inject(Location);

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this._API.getproducts('/asdada').subscribe(
      (datos) => {
        this.allproducts = datos;
      },
      (error) => {
        console.log(error);
      }
    );
    this._router.params.subscribe((params) => {
      this.productId = params['productId'];
      this.product = this.allproducts.find(
        (element) => element.id == params['productId']
      );
      this.loading = false;

      if (this.product && this.product.image && this.product.image.length > 0) {
        const firstImage = this.product.image[0];
        this.img1 = firstImage.valor1;
        this.img2 = firstImage.valor2;
        this.img3 = firstImage.valor3;
        this.img4 = firstImage.valor4;
      }

      console.log(this.img1);
    });


  }
}
