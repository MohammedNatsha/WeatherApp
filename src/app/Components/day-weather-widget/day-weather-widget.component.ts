import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';

@Component({
  selector: 'app-day-weather-widget',
  templateUrl: './day-weather-widget.component.html',
  styleUrls: ['./day-weather-widget.component.css']
})
export class DayWeatherWidgetComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }
  @Input() weather;
  @Input() city;

  ngOnInit() 
  {
    
  }

}
