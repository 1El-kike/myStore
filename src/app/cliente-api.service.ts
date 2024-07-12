import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {

urlbase = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _http : HttpClient) {}

    /**
     * getAll
    */
   public getAll():Observable<Todos[]> {
    return this._http.get<Todos[]>(this.urlbase)
   }

   /**
    * getTodusById
   */
   public getTodusById(id:number | string):Observable<Todos> {
    return this._http.get<Todos>(`${this.urlbase}/${id}`)
   }

   /**
    * createTodus
    */
   public createTodus(value:Todos):Observable<Todos> {
    return this._http.post<Todos>(this.urlbase,value)
   }

   /**
    * updateTodus
  */
   public updateTodus( value: Todos):Observable<Todos> {
    return this._http.put<Todos>(`${this.urlbase}/${value.id}`,value)
   }

    /**
    * deleteTodus
    */
public deleteTodus(id:number | string):Observable<Todos> {
  return this._http.delete<Todos>(`${this.urlbase}/${id}`)
 }

}

export interface Todos {
  userId?: number;
  id?:     number;
  title?:  string;
  body?:   string;
}
