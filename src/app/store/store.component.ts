import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FondoComponent } from '../fondo/fondo.component';
import { ApiStoresService } from '../services/api-stores.service';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterLink, FondoComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  //id de la tienda
  storeId?: string;
  //fondo de pantalla de la tienda
  bgImage = 'url("")';
  //posicion de la foto
  position = 'center';
  //datos de los productos
  productList: any[] = [];
  //datos de la tienda
  store?: Stores;
  loading: boolean = true;

  private _router = inject(ActivatedRoute);
  private _API = inject(ApiStoresService);

  addproduct() {}

  ngOnInit(): void {
    this._router.params.subscribe((params) => {
      this.storeId = params['storeid'];
      this.loading = false;
    });
    this._API
      .getAllproductStores(`productStore/store/${this.storeId}`)
      .subscribe(
        (datos) => {
          this.productList = datos;
          console.log(this.productList);
        },
        (error) => {
          console.log(error);
        }
      );
    this._API.getStores(`stores/${this.storeId}`).subscribe(
      (datos: Stores) => {
        this.store = datos;
        this.bgImage = `url("${this.store.imgfondo}")`;
      },
      (error) => {
        console.log(error);
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
