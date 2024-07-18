import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  private Localstorekey = 'lista_compra';

  getList():string[]{
    return JSON.parse(localStorage.getItem(this.Localstorekey) as string ) || []
  }

  agregarList(list:string){
    const lists  = this.getList();
    lists.push(list);
    localStorage.setItem(this.Localstorekey,JSON.stringify(lists))
  }

  eliminarList (index:number){
    const lists =this.getList();
    lists.splice(index,1);
    localStorage.setItem(this.Localstorekey,JSON.stringify(lists));
  }


}
