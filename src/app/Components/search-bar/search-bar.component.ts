import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  window;
  city;
  list;
  constructor(private ws:WeatherService) { }
  query;

  ngOnInit()
  {
    this.window= window;
    this.ws.getNearCities(ele => 
      {
        this.list = ele.list;
        this.city = this.list[0]; 
      });

     
 
  }

  back()
  {
    history.back()
  }

  onSearchChange(searchValue: string): void 
  {  
    this.query = searchValue;
  }

  change(searchValue: string)
  {
    if(!searchValue) return;
    this.router.navigateByUrl(searchValue);
  }

  clear(ele)
  {
    ele.value = "";
    ele.blur();
  }
}
