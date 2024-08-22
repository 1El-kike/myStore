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
 private user = 'user';
//datos de token
 private _tokenKey  = 'token';

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
  return JSON.parse(localStorage.getItem(this.user) as string ) || []
}

//guardar datos de usuario
setUser = (users:any) => {
  const user  = this.getList();
  if (!user) {
    console.log(user)
  }
  else{
    console.log(user)
  }
   user.push(users);
   localStorage.setItem(this.user,JSON.stringify(user))
 /*  const user = this._user.value;
  user.push(users);
  this._user.next(user); */
}

//eliminar usuario
delitUser = () => {
  //const user = this._user.value;
  //const filteredusers = user.filter(item => item.id !== item.id);
 // this._user.next(filteredusers);
 const user =this.getList();
  user.splice(1,1);
  //const filteredLists = lists.filter(item => item.id !== index);
  localStorage.setItem(this.user,JSON.stringify(user));
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
