import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherPresentationComponent } from './weather-container/weather-presentation/weather-presentation.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherContainerComponent,
    WeatherPresentationComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class WeatherModule { }
