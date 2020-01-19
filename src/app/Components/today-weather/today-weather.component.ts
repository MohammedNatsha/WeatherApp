import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { parse } from 'querystring';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit 
{
  city;
  weather;
  constructor(private ws:WeatherService, private route:ActivatedRoute) { }  
  params;
  ngOnInit() 
  {
    this.route.paramMap.subscribe(
      ele =>
      {
         this.params = ele.params; 
         this.ws.getWeather(this.params.city,ele => 
          { 
            this.city = ele.city;
            this.weather = ele.list[0] 
          });
      }
      );
  }
  
}
