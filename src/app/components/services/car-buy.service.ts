import { addbuy } from '../utils/Carbuy';
import { inject, Injectable } from '@angular/core';
import { LocalstoreService } from './localstore.service';
import { ApiHomeService } from './api-home.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  //Datos de usuario
  user: string | any = '';
  //Lista de productos favoritos
  favoriteProduct?: any;
  //elementos de busqueda resultado
  valorfind: any[] = [];
  //datos carrito de compra
  datosnew?: any;
  elementFind: string = '';
  valor: string[] = [''];
  //abrir menu de compra
  isOpenMenu = false;
  //lista de Productos mas vendidos - Productos favoritos
  datosLocales: any[] = [];
  //datos de los productos que se van agregar a mis favoritos
  listaFavorite: any[] = [];
  //datos de la Api de la lista de Productos Nuevos
  datosApi: any[] = [];
  //para mostrar los datos si ya estan cargados
  datosApiLoading: boolean = true;

  constructor() {}


  private _servisLocalStore = inject(LocalstoreService);
  private _API = inject(ApiHomeService);

  public buyCar(
    _messageService: any, id: number,
    name: string, price: number,
    num: number, img: string,
    tipo: string
  ) {
    this.datosLocales = this._servisLocalStore.getList();
    addbuy(
      this.datosLocales,
      this.datosnew,
      this._servisLocalStore,
      _messageService,
      id,name, price, num, img, tipo
    );
  }


}
