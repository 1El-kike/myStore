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
  //Api para agregar productos a favoritos
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
    console.log(`${this.apiUrlBase}/${endpoint}`, httpOptions);
    return this._http.get(`${this.apiUrlBase}/${endpoint}`, httpOptions);
  };
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
