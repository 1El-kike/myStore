import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class LocalstoreService {

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


}

export interface List {
  id:number,
  name :string,
  precio:number,
  cantidad:number,
  img:string,
  tipo:string

}
