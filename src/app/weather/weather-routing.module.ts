import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherComponent } from './weather.component';

const routes: Routes = [{
  path: '', component: WeatherComponent,
  children: [{
    path: 'current',
    component: WeatherContainerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'current'
  }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
