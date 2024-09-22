import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalstoreService } from './localstore.service';

@Injectable({
  providedIn: 'root',
})
export class ApiHomeService {
  private apiUrlBase = 'http://localhost:3450';

  private _http = inject(HttpClient);
  private _localStore = inject(LocalstoreService);

  // Api Productos nuevos recientementes
  public getAllnewProduct = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  //API para obtener todos los datos de los productos y de las tiendas
  public getAllProductandStore = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  //API para actualizar los productos recientemente
  public updateNewProduct = (
    endpoint: string,
    data: any
  ): Observable<any> | void => {
    const token = this._localStore.getToken();
    if (token?.length == 0) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._http.put(`${this.apiUrlBase}/${endpoint}`, data, httpOptions);
  };
  // Api Productos Favoritos del mercado
  public getAllFavoriteProduct = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  //Api para actualizar Productos Favoritos del mercado
  public updateFavoriteProduct = (
    endpoint: string,
    data: any
  ): Observable<any> | void => {
    const token = this._localStore.getToken();
    if (token?.length == 0) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._http.put(`${this.apiUrlBase}/${endpoint}`, data, httpOptions);
  };
  //Api para pbtener los productos a favoritos de los usuarios
  public getMyfavoriteProduct = (endpoint: string): Observable<any> | void => {
    const token = this._localStore.getToken();
    if (token?.length == 0) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._http.get(`${this.apiUrlBase}/${endpoint}`, httpOptions);
  };
  //Api para agregar los productos a favoritos de los usuarios
  public createMyfavoriteProduct = (
    endpoint: string,
    data: any
  ): Observable<any> | void => {
    const token = this._localStore.getToken();
    if (token?.length == 0) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._http
      .post(`${this.apiUrlBase}/${endpoint}`, data, httpOptions)
      .pipe(
        catchError((error) => {
          console.error('Error al crear elemento', error);
          return throwError(() => new Error('Ocurrio un error'));
        })
      );
  };
}
