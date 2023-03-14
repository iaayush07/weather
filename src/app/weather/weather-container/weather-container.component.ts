import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData } from '../model/weather.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  // styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {

  public weatherData$: Observable<weatherData>;
  public cityName: string = 'london';

  constructor(private mainService: ApiService) {
    this.weatherData$ = new Observable();
  }

  ngOnInit(): void {
    this.weatherData$ = this.mainService.getWeatherdata(this.cityName);
    this.cityName = ''
  }

  searchCity(cityName: any) {
    this.weatherData$ = this.mainService.getWeatherdata(cityName);
  }

}
