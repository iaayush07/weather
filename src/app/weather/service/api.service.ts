import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { weatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  getWeatherdata(city: string): Observable<weatherData> {
    return this._http.get<weatherData>(environment.weatherUrl, {
      params: new HttpParams()
        .set('q', city)
        .set(environment.keyName, environment.keyValue)
    })
  }

}
