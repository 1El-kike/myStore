import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthServiceService {
  private _http = inject(HttpClient);

  private apiUrlBase = environment.apiUrlBase;

  public registre = (endpoint: string, data: any): Observable<any> => {
    return this._http.post(`${this.apiUrlBase}/${endpoint}`, data);
  };
  public logIn = (endpoint: string, data: any): Observable<any> => {
    return this._http.post(`${this.apiUrlBase}/${endpoint}`, data);
  };
}
