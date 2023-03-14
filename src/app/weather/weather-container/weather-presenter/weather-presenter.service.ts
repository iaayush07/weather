import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherPresenterService {

  public cityForm: Subject<any>;
  public cityForm$: Observable<any>

  constructor(private fb: FormBuilder) {
    this.cityForm = new Subject();
    this.cityForm$ = this.cityForm.asObservable();
  }

  public buildForm(): FormGroup {
    return this.fb.group({
      cityName: ['', Validators.pattern('^[a-zA-Z]+$')]
    });
  }

  public submitCity(saveForm: FormGroup) {
    this.cityForm.next(saveForm.value);
  }
}
