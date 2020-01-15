import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-days-weather-list',
  templateUrl: './days-weather-list.component.html',
  styleUrls: ['./days-weather-list.component.css']
})
export class DaysWeatherListComponent implements OnInit {
  list;
  constructor(private ws:WeatherService) {}

  ngOnInit() 
  {
      this.ws.getWeather(ele => {this.list = ele.list, console.log(this.list)});
      
  }

}
