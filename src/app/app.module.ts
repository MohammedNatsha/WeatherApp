import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { DayWeatherWidgetComponent } from './Components/day-weather-widget/day-weather-widget.component';
import { DaysWeatherListComponent } from './Components/days-weather-list/days-weather-list.component';
import { TodayWeatherComponent } from './Components/today-weather/today-weather.component';
import { WeatherDetailsComponent } from './Components/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DayWeatherWidgetComponent,
    DaysWeatherListComponent,
    TodayWeatherComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
