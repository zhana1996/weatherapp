import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import { Temperature } from '../temperature';
import { template } from '@angular/core/src/render3';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  weather: Weather;
  temperature: Temperature;
  showData = true;
  errorMessage: string;
  public date = new Date(); 

  constructor( private _weatherService: WeatherService) { 
     this.weather = new Weather();
     this.temperature = new Temperature();
  }

  ngOnInit() {

  }

  logMessage(parameter) {

    this._weatherService.searchWeatherData(parameter).subscribe(data => {
      console.log(data);
      this.showData = true;
      this.weather = data['weather'][0];
      this.weather.name = data.name;
      this.temperature = data['main'];
      this.weather.iconUrl = 'http://openweathermap.org/img/w/' + this.weather.icon + '.png';
    }, 
    (error) => {
      this.showData = false;
      this.errorMessage = error.error.message;
    }
    );
  }

}
