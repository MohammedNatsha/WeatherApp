import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  weather;
  constructor(private ws:WeatherService, private route:ActivatedRoute) { }

  params;
  ngOnInit() 
  {
    this.route.paramMap.subscribe(
      ele =>
      {
         this.params = ele['params']; 
         this.ws.getWeather(this.params.city,ele => this.weather = ele.list[this.params.day%5]);
      }
      );
  }



}
