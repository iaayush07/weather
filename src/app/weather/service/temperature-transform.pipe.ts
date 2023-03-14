import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureTransform'
})
export class TemperatureTransformPipe implements PipeTransform {

  transform(value: number | undefined, unit: string) {

    if (value && !isNaN(value)) {

      if (unit === 'C') {
        var tempareature = (value - 273.15);
        return tempareature;
      }
      if (unit === 'F') {
        var tempareature = (value * 32) + 1.8;
        return tempareature;
      }
    }
    return 0;
  }


}
