import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { favorite } from '../home/home-sections/sections-component/home-sections.component';
@Injectable({
  providedIn: 'root',
})
export class LocalstoreService {
  ListaFavorite: favorite[] = [];

  private ListaLocalfavorite = 'lista_favorita';

  // datos de usuario
  private user = 'user';
  //datos de token
  private _tokenKey = 'token';

  private _listaSubject = new BehaviorSubject<List[]>([]);
  private _totalPriceSubject = new BehaviorSubject<number>(0);
  public _totalPrice$ = this._totalPriceSubject.asObservable();
  lista$ = this._listaSubject.asObservable();

  setToken(token: string): void {
    localStorage.setItem(this._tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this._tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this._tokenKey);
  }

  //obtener datos de usuario
  getUser = () => {
    return JSON.parse(localStorage.getItem(this.user) as string) || [];
  };

  //guardar datos de usuario
  setUser = (users: any) => {
    const user = this.getList();
    user.push(users);
    localStorage.setItem(this.user, JSON.stringify(user));
  };

  //eliminar usuario
  delitUser = () => {
    localStorage.removeItem(this.user);
  };


  getList(): List[] {
    return this._listaSubject.value;
  }

  agregarList(list: List) {
    const currentLista = [...this._listaSubject.value];
    currentLista.push(list);
    this._listaSubject.next(currentLista);
    const total = this._listaSubject.value.reduce(
      (acc, next) => acc + next.precio,
      0
    );
    this._totalPriceSubject.next(total);
  }

  addmoreProduct(index: number) {

    const product = [...this._listaSubject.value];
    product.forEach((ele) => {
      ele.id == index
        ? (ele.cantidad = ele.cantidad + 1)
        : (ele.cantidad = ele.cantidad);
    });
    const newTotal = product.reduce(
      (acc, next) => acc + next.precio * next.cantidad,
      0
    );
    this._totalPriceSubject.next(newTotal);
    this._listaSubject.next(product);
  }

  delitmoreProduct(index: number) {
    const users = [...this._listaSubject.value];
    users.forEach((ele) => {
      if (ele.id == index) {
        if (ele.cantidad > 1) {
          ele.cantidad = ele.cantidad - 1;
        }
      }
    });
    const newTotal = users.reduce(
      (acc, next) => acc + next.precio * next.cantidad,
      0
    );
    this._totalPriceSubject.next(newTotal);
    this._listaSubject.next(users);
  }

  eliminarList(index: number) {
    // const users =this.getList();
    const currentLista = [...this._listaSubject.value];
    //users.splice(index,1);
    //const filteredusers = users.filter(item => item.id !== index);
    const filteredusers = currentLista.filter((item) => item.id !== index);
    // currentLista.splice(index, 1);
    // localStorage.setItem(this.Localstorekey,JSON.stringify(filteredusers));
    this._listaSubject.next(filteredusers);
  }

  getFavorite() {
    return (
      JSON.parse(localStorage.getItem(this.ListaLocalfavorite) as string) || []
    );
  }
}

export interface List {
  id: number;
  name: string;
  precio: number;
  cantidad: number;
  img: string;
  tipo: string;
}
