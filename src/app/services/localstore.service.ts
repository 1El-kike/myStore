import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { favorite } from '../home/find-items/find-items.component';

@Injectable({
  providedIn: 'root'
})



export class LocalstoreService {

ListaFavorite:favorite[] = []
 private ListaLocalfavorite = "lista_favorita"

 // private Localstorekey = 'lista_compra';

  private _listaSubject = new BehaviorSubject<List[]>([]);

  lista$ = this._listaSubject.asObservable();


  getList():List[]{
    // return JSON.parse(localStorage.getItem(this.Localstorekey) as string ) || []
    return this._listaSubject.value;
  }

  agregarList(list:List){
    //const lists  = this.getList();
    const currentLista = [...this._listaSubject.value];
   // lists.push(list);
    currentLista.push(list);
    //localStorage.setItem(this.Localstorekey,JSON.stringify(lists))
    this._listaSubject.next(currentLista);
  }

  addmoreProduct(index:number){
    const lists = [...this._listaSubject.value]
    lists.forEach( (ele)=>{
      ele.id == index ? ele.cantidad = ele.cantidad + 1 : ele.cantidad = ele.cantidad
    })
   this._listaSubject.next(lists)
  }
  delitmoreProduct(index:number){
    const lists = [...this._listaSubject.value]
    lists.forEach( (ele)=>{
      ele.id == index ? ele.cantidad = ele.cantidad - 1 : ele.cantidad = ele.cantidad
    })
    this._listaSubject.next(lists)
  }

  eliminarList (index:number){
   // const lists =this.getList();
    const currentLista = [...this._listaSubject.value];
    //lists.splice(index,1);
    //const filteredLists = lists.filter(item => item.id !== index);
    const filteredLists = currentLista.filter(item => item.id !== index);
   // currentLista.splice(index, 1);
   // localStorage.setItem(this.Localstorekey,JSON.stringify(filteredLists));
    this._listaSubject.next(filteredLists);
  }


/*   setFavorite(element :favorite[],index:number){
    const lists = this.getFavorite()
    if (lists.length < element.length) {
      lists.filter((item:favorite) => item.id !== index);
      localStorage.setItem(this.ListaLocalfavorite,JSON.stringify(lists))
    } else {
      lists.push(element);
      localStorage.setItem(this.ListaLocalfavorite,JSON.stringify(lists))
    }

  } */
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
