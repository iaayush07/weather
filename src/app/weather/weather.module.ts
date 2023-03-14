import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherPresentationComponent } from './weather-container/weather-presentation/weather-presentation.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TemperatureTransformPipe } from './service/temperature-transform.pipe';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherContainerComponent,
    WeatherPresentationComponent,
    TemperatureTransformPipe
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
  ]
})
export class WeatherModule { }
