import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiStoresService {
  private _http = inject(HttpClient);
  private apiUrlBase = 'http://localhost:3450';

  public getAllStores = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  public getStores = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
  public getAllproductStores = (endpoint: string): Observable<any> => {
    return this._http.get(`${this.apiUrlBase}/${endpoint}`);
  };
}
