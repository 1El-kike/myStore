import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { favorite } from '../home/find-items/find-items.component';
@Injectable({
  providedIn: 'root'
})



export class LocalstoreService {

ListaFavorite:favorite[] = []


 private ListaLocalfavorite = "lista_favorita"


 // datos de usuario
 private _user = new BehaviorSubject<List[]>([]);
 user$ = this._user.asObservable();

//obtener datos de usuario
getUser = () => {
  return this._user.value;
}
//guardar datos de usuario
setUser = (users:any) => {
  const user = this._user.value;
  user.push(users);
  this._user.next(user);
}

//eliminar usuario
delitUser = () => {
  const user = this._user.value;
  const filteredusers = user.filter(item => item.id !== item.id);
  this._user.next(filteredusers);
}


  private _listaSubject = new BehaviorSubject<List[]>([]);
  private _totalPriceSubject = new BehaviorSubject<number>(0);
  public _totalPrice$ = this._totalPriceSubject.asObservable();
  lista$ = this._listaSubject.asObservable();


  getList():List[]{
    return this._listaSubject.value;
  }


  agregarList(list:List){
    const currentLista = [...this._listaSubject.value];
    currentLista.push(list);
    this._listaSubject.next(currentLista);
    const total = this._listaSubject.value.reduce((acc,next) => acc + next.precio ,0);
    this._totalPriceSubject.next(total)
  }

  addmoreProduct(index:number){
    const users = [...this._listaSubject.value]
    users.forEach( (ele)=>{
      ele.id == index ? ele.cantidad = ele.cantidad + 1 : ele.cantidad = ele.cantidad
      })
     const newTotal = users.reduce((acc, next) => acc + next.precio * next.cantidad, 0);
     this._totalPriceSubject.next(newTotal);
     this._listaSubject.next(users)
  }

  delitmoreProduct(index:number){
    const users = [...this._listaSubject.value]
    users.forEach((ele) => {
      if (ele.id == index) {
        if (ele.cantidad > 1) {
          ele.cantidad = ele.cantidad - 1;
        }
      }
    });
  const newTotal = users.reduce((acc, next) => acc + next.precio * next.cantidad, 0);
  this._totalPriceSubject.next(newTotal);
  this._listaSubject.next(users);
  }

  eliminarList (index:number){
   // const users =this.getList();
    const currentLista = [...this._listaSubject.value];
    //users.splice(index,1);
    //const filteredusers = users.filter(item => item.id !== index);
    const filteredusers = currentLista.filter(item => item.id !== index);
   // currentLista.splice(index, 1);
   // localStorage.setItem(this.Localstorekey,JSON.stringify(filteredusers));
    this._listaSubject.next(filteredusers);
  }

  setFavorite(favorites: favorite[], productId: number) {
    const existingFavorites = JSON.parse(localStorage.getItem(this.ListaLocalfavorite) || '[]');

    // Verifica si el producto ya está en la lista de favoritos
    const isProductInList = favorites.some(fav => fav.id === productId);

    if (!isProductInList) {
      // Si el producto no está en la lista, lo agregamos
      favorites.push({ id: productId, ...existingFavorites.find((fav:any) => fav.id === productId) });
    } else {
      // Si el producto está en la lista, lo eliminamos
      favorites = favorites.filter(fav => fav.id !== productId);
    }

    localStorage.setItem(this.ListaLocalfavorite, JSON.stringify(favorites));
  }

  getFavorite (){
  return JSON.parse(localStorage.getItem(this.ListaLocalfavorite) as string ) || []
  }

}

export interface List {
  id:number,
  name :string,
  precio:number,
  cantidad:number,
  img:string,
  tipo:string

}
