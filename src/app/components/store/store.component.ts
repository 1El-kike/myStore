import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FondoComponent } from '../fondo/fondo.component';
import { ApiStoresService } from '../services/api-stores.service';
import { SkeletonModule } from 'primeng/skeleton';
import { NgClass } from '@angular/common';
import { GlobalConstants } from '../utils/global-constants';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterLink, FondoComponent, SkeletonModule, NgClass],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  //id de la tienda
  storeId?: string;
  //fondo de pantalla de la tienda
  bgImage = 'url("")';
  //fondo mientras se carga la imagen
  bgloading = 'linear-gradient(to left ,rgb(228, 64, 64), rgb(255, 221, 0)';
  //posicion de la foto
  position = 'center';
  //datos de los productos
  productList: any[] = [];
  //is loading or not products
  isLoading: boolean = true;
  //is loading or not stores
  isloadingStores: boolean = true;
  //datos de la tienda
  store?: Stores;
  loading: boolean = true;
  //Datos de la url de la app backend
  url:string = GlobalConstants.appURL;

  private _router = inject(ActivatedRoute);
  private _API = inject(ApiStoresService);

  addproduct() {}

  ngOnInit(): void {
    console.log(this.url,"holaaa")
    this._router.params.subscribe((params) => {
      this.storeId = params['storeid'];
      this.loading = false;
    });
    this._API
      .getAllproductStores(`productStore/store/${this.storeId}`)
      .subscribe(
        (datos) => {
          this.productList = datos;
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          //this.isLoading = false;
        }
      );
    this._API.getStores(`stores/${this.storeId}`).subscribe(
      (datos: Stores) => {
        this.store = datos;
        this.bgImage = `url("${this.url + this.store.imgfondo}")`;
        this.isloadingStores = false;
      },
      (error) => {
        console.log(error);
        //this.isloadingStores = false;
      }
    );
  }
}

export interface Stores {
  id: number;
  code: string;
  name: string;
  description: string;
  imgfondo: string;
  isOpen: boolean;
  imgPortada: string;
  imgStore: string;
  rating: number;
}
