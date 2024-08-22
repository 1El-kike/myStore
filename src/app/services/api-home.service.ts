import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstoreService } from './localstore.service';

@Injectable({
  providedIn: 'root'
})
export class ApiHomeService {

  private apiUrlBase = 'http://localhost:3450'

  private _http = inject(HttpClient)
  private _localStore = inject(LocalstoreService)

 // Api Productos agregados recientementes
 public getAllnewProduct = (endpoint:string):Observable<any> =>{
  return this._http.get(`${this.apiUrlBase}/${endpoint}`)
 }
 public updateNewProduct = (endpoint:string,data:any):Observable<any> | void =>{
  const token = this._localStore.getToken();
  if (token?.length == 0 ) {
    return
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  };
  return this._http.put(`${this.apiUrlBase}/${endpoint}`,data,httpOptions )
 }
 // Api Productos Favoritos del mercado
 public getAllFavoriteProduct = (endpoint:string):Observable<any> =>{
  return this._http.get(`${this.apiUrlBase}/${endpoint}`)
 }
 public updateFavoriteProduct = (endpoint:string,data:any):Observable<any> =>{
  return this._http.put(`${this.apiUrlBase}/${endpoint}`,data)
 }
}
