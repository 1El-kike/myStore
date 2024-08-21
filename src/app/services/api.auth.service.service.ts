import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthServiceService {

  private _http = inject(HttpClient)

  private  urlhttpBase = 'http://localhost:3450'

  public registre =  (endpoint: string,data:any ): Observable<any> => {
    return this._http.post(`${this.urlhttpBase}/${endpoint}`, data)
  }
}
