import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather: Weather;
  constructor(private _http: HttpClient) { }

  searchWeatherData(cityName: string): Observable<Weather> {
    return this._http.get<Weather>('http://api.openweathermap.org/data/2.5/weather?q=' +cityName +'&appid=f1dea0f479f3484ec1a8c8f5ea3495ee&units=metric');
  }



}
