import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { weatherData } from '../../model/weather.model';
import { ApiService } from '../../service/api.service';
import { WeatherPresenterService } from '../weather-presenter/weather-presenter.service';

@Component({
  selector: 'app-weather-presentation',
  templateUrl: './weather-presentation.component.html',
  providers: [WeatherPresenterService]
  // styleUrls: ['./weather-presentation.component.scss']
})
export class WeatherPresentationComponent implements OnInit {
  /**
    * setter for getting data
    */
  @Input() public set weather(value: weatherData | null | undefined) {
    if (value) {
      this.weatherData = value;
      this.name = value.name
      this.temp = value.main.temp - 273.15;
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
  public name: string;
  public temp: number;
  public form: FormGroup;
  @Output() public searchCity: EventEmitter<any>;


  constructor(private weatherApiService: ApiService, private weatherPresenterService: WeatherPresenterService) {
    this.name = '';
    this.temp = 0;
    this.form = weatherPresenterService.buildForm();
    this.searchCity = new EventEmitter();
  }
  ngOnInit(): void {
    // this.weatherApiService.getWeatherdata('surat').subscribe((res: weatherData) => {
    //   console.log(res);
    //   this.weatherData = res;
    // })
    this.weatherPresenterService.cityForm$.subscribe((res: any) => {
      console.log(res);
      this.searchCity.emit(res.cityName);
    });
  }
  // geter function
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.form.controls;
  }

  submit() {
    this.weatherPresenterService.submitCity(this.form);
    this.form.reset();
    // this.weatherData;
  }
}
