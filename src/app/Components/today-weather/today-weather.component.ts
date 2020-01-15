import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit 
{
  weather;
  constructor(private ws:WeatherService) { }
 
  ngOnInit() {
    this.ws.getWeather(ele => {this.weather = ele.list[0], console.log(this.weather)});
  }

}
