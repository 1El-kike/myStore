import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiStoresService {
  private _http = inject(HttpClient);
  private apiUrlBase = 'http://localhost:3450';

  //observable para obtener datos de todas las tiendas
  public getAllStores = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  //observable para obtener datos de todos los products
  public getAllproducts = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  //observable para obtener datos de cada producto individual
  public getproducts = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  //observable para obtener datos de las tiendas individual
  public getStores = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  //observable para obtener datos de todos los productos que esten dentro de una tienda
  public getAllproductStores = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
}
