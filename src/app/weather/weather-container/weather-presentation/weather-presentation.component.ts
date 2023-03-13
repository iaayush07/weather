import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { weatherData } from '../../model/weather.model';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-weather-presentation',
  templateUrl: './weather-presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrls: ['./weather-presentation.component.scss']
})
export class WeatherPresentationComponent implements OnInit {
  /**
    * setter for getting data
    */
  @Input() public set weather(value: weatherData | null) {
    if (value) {
      this.weatherData = value;
      console.log(this.weatherData);
    }
  }
  /**
   * getter for getting data
   */
  public get weather(): weatherData {
    return this.weatherData;

  }
  public weatherData!: weatherData;

  constructor(private weatherApiService: ApiService) {

  }



  ngOnInit(): void {

  }
}
