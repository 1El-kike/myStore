import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { List, LocalstoreService } from '../../../services/localstore.service';
import { FormsModule } from '@angular/forms';
import { HomeSecondoryComponent } from '../../home-secondory/home-secondory.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { SearchElementComponent } from '../input-results/search-element.component';
import { ApiHomeService } from '../../../services/api-home.service';
import { map, Observable } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';
import * as AOS from 'aos';
import { SearchComponentComponent } from '../search-input/search-component.component';
import { CarService } from '../../../services/car-buy.service';
import { SessionComponent } from '../../../../layout/session/session.component';
import { AddToFavoriteService } from '../../../services/add-to-favorite.service';
import { SectionsIsvaluezeroComponent } from '../sections-isvaluezero/sections-isvaluezero.component';
import { GlobalConstants } from '../../../utils/global-constants';
@Component({
  selector: 'app-home-sections',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    HomeSecondoryComponent,
    TagModule,
    SearchElementComponent,
    NgClass,
    ButtonModule,
    CarouselModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    SkeletonModule,
    SearchComponentComponent,
    SessionComponent,
    SectionsIsvaluezeroComponent
  ],
  providers: [MessageService],
  templateUrl: './home-sections.html',
  styleUrl: './home-sections.css',
})
export class HomeSectionsComponent implements OnInit {
  @Input() image?: string = '';
  @Input() title: string = '';

  //Datos de usuario
  user: string | any = '';
  //Datos de la url de la app backend
  url:string = GlobalConstants.appURL;
  //Lista de productos favoritos
  favoriteProduct?: any;
  //para mostrar los datos si ya estan cargados
  favoriteProductLoading?: boolean = true;
  //valor del input de busqueda
  searchElement = '';
  //elementos de busquedas inicial
  productsfind = signal([]);
  //elementos de busqueda resultado
  valorfind: any[] = [];
  //datos carrito de compra
  datosnew?: List;
  elementFind: string = '';

  valor: string[] = [''];

  //lista de Productos mas vendidos - Productos favoritos
  datosLocales: List[] = [];
  //datos de los productos que se van agregar a mis favoritos
  listaFavorite: any[] = [];
  //datos de la Api de la lista de Productos Nuevos
  datosApi: any[] = [];
  //para mostrar los datos si ya estan cargados
  datosApiLoading: boolean = true;
  //mensaje de error
  messageError: any = [];
  //Para activae el error
  statusmessage: boolean = false;
  //carrousel de products
  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  private _addToFavoriteService = inject(AddToFavoriteService);
  private _messageService = inject(MessageService);
  private _carServuce = inject(CarService);
  private _servisLocalStore = inject(LocalstoreService);
  private _API = inject(ApiHomeService);

  //Para actualizar los elementos tanto productos como tienda desde el componente hijo
  changefind($data: any) {
    this.valorfind = $data;
  }
  //Para actualizar texto de searchElement desde el componente hijo
  changetext($data: any) {
    this.searchElement = $data;
  }

  getSeverity(status: string) {
    return status === 'In Stock' ? 'success' : 'danger';
  }

  //añadir al carrito de compra
  addbuy(
    id: number,
    name: string,
    price: number,
    num: number,
    img: string,
    tipo: string
  ) {
    this._carServuce.buyCar(
      this._messageService,
      id,
      name,
      price,
      num,
      img,
      tipo
    );
  }

  //eliminar lista de compra de carrito
  eliminarlist = (index: number) => {
    this._servisLocalStore.eliminarList(index);
    this.datosLocales = this._servisLocalStore.getList();
  };
  //agregar a la lista de favoritos o quitar de la lista
  addtofavorite(status: boolean, productIndex: number, datos: any[]) {
    this._addToFavoriteService.addorRemoveToFavorite(
      this._messageService,
      status,
      productIndex,
      datos
    );
  }

  ngOnInit(): void {

    AOS.init();
    window.addEventListener('load', AOS.refresh);

    this.datosLocales = this._servisLocalStore.getList();
    this.user = this._servisLocalStore.getUser();
    if (this.user.length == 0) {
      this.user = null;
    } else {
      //obtener los prodctos favoritos del usuario
       (
        this._API.getMyfavoriteProduct(
          `mylistProductFavorite/${this.user[0][0].id}`
        ) as Observable<any>
      ).subscribe((data) => {
        this.listaFavorite = data;
      });
    }
    //obteber la lista  productos favoritos
    this._API
      .getAllFavoriteProduct('favoriteProduct')
      .pipe(
        map((items) => {
          const results = [];
          for (let index = 0; index < items.length; index++) {
            var element = items[index];
            if (this.listaFavorite.length > 0 && this.listaFavorite) {
              let modifiedItem = { ...element };
              for (
                let favIndex = 0;
                favIndex < this.listaFavorite.length;
                favIndex++
              ) {
                var favoriteElement = this.listaFavorite[favIndex];
                if (favoriteElement.productoId == element.id_product) {
                  modifiedItem.status = true;
                  modifiedItem.icon = 'pi-heart-fill';
                  break; // Salimos del bucle interno después de encontrar una coincidencia
                }
              }
              results.push(modifiedItem);
            } else {
              results.push(element);
            }
          }
          return results;
        })
      )
      .subscribe(
        (data) => {
          this.favoriteProduct = data;
          this.favoriteProductLoading = false;
        },
        (error) => {
          //  this.favoriteProductLoading = false;
        }
      );
    //obtener lista de productos nuevos
    this._API
      .getAllnewProduct('newProduct')
      .pipe(
        map((items) => {
          const results = [];
          for (let index = 0; index < items.length; index++) {
            var element = items[index];
            if (this.listaFavorite.length > 0 && this.listaFavorite) {
              let modifiedItem = { ...element };
              for (
                let favIndex = 0;
                favIndex < this.listaFavorite.length;
                favIndex++
              ) {
                var favoriteElement = this.listaFavorite[favIndex];
                if (favoriteElement.productoId == element.id_product) {
                  modifiedItem.status = true;
                  modifiedItem.icon = 'pi-heart-fill';
                  break; // Salimos del bucle interno después de encontrar una coincidencia
                }
              }
              results.push(modifiedItem);
            } else {
              results.push(element);
            }
          }
          return results;
        })
      )
      .subscribe(
        (data) => {
          this.datosApi = data;
          this.datosApiLoading = false;
        },
        (error) => {
          //this.datosApiLoading = false;
        }
      );
    this._API.getAllProductandStore('productStore/all/').subscribe(
      (data) => {
        this.productsfind.set(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

export interface favorite {
  id: number;
  id_product: number;
  image: string;
  name: string;
  price: number;
  inventoryStatus: string;
  status: boolean;
  quantity_user: number;
  icon: string;
  tipo: string;
}
