import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHomeService {

  private apiUrlBase = 'http://localhost:3450'

  private _http = inject(HttpClient)


 public getAllnewProduct = (endpoint:string):Observable<any> =>{
  return this._http.get(`${this.apiUrlBase}/${endpoint}`)
 }
 public updateNewProduct = (endpoint:string,data:any):Observable<any> =>{
  return this._http.put(`${this.apiUrlBase}/${endpoint}`,data)
 }
}
