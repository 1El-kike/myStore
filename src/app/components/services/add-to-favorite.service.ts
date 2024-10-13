import { inject, Injectable } from '@angular/core';
import { ApiHomeService } from './api-home.service';
import { addtofavorite } from '../utils/addtofavorite';
import { LocalstoreService } from './localstore.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoriteService {
  //Datos de usuario
  user: string | any = '';
  //mensaje de error
  messageError: any = [];
  //datos de los productos que se van agregar a mis favoritos
  listaFavorite: any[] = [];

  //Lista de productos favoritos
  productsfind?: any;


  private _API = inject(ApiHomeService);
  private _servisLocalStore = inject(LocalstoreService);

  public addorRemoveToFavorite(

    _messageService: any,
    listaFavorite: any,
    status: boolean,
    productIndex: number,
    datos: any[]
  ) {
    this.user = this._servisLocalStore.getUser();

     //obtener los prodctos favoritos del usuario
     (
      this._API.getMyfavoriteProduct(
        `mylistProductFavorite/${this.user[0][0].id}`
      ) as Observable<any>
    ).subscribe((data) => {
      this.listaFavorite = data;
    });
    if (this.user.length == 0) {
      this.user = null;
    }
    addtofavorite(
      this.user,
      this._API,
      _messageService,
      this.messageError,
      listaFavorite,
      status,
      productIndex,
      datos
    );
  }
}
