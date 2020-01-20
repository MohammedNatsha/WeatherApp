import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-days-weather-list',
  templateUrl: './days-weather-list.component.html',
  styleUrls: ['./days-weather-list.component.css']
})
export class DaysWeatherListComponent implements OnInit {
  list;
  city;
  constructor(private ws:WeatherService, private route:ActivatedRoute) {}
  params;
  ngOnInit() 
  {
      this.route.paramMap.subscribe(
        ele =>
        {
           this.params = ele['params']; 
           this.ws.getWeather(this.params.city,ele => 
            {
              this.list = ele.list.splice(1)
              this.city = ele.city;
            });
        }
        );
      
  }

}
