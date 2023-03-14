import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { weatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public city: Subject<any>
  public city$: Observable<any>

  constructor(private _http: HttpClient) {
    this.city = new Subject();
    this.city$ = this.city.asObservable();
  }

  getWeatherdata(city: string): Observable<weatherData> {
    return this._http.get<weatherData>(environment.weatherUrl, {
      params: new HttpParams()
        .set('q', city)
        .set(environment.keyName, environment.keyValue)
    })
  }

}
