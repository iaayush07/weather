import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData } from '../model/weather.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  // styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {

  public weatherData$: Observable<weatherData>

  constructor(private mainService: ApiService) {
    this.weatherData$ = new Observable();
  }

  ngOnInit(): void {
    this.weatherData$ = this.mainService.getWeatherdata('surat');
  }
}
