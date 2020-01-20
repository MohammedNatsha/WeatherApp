import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { DayWeatherWidgetComponent } from './Components/day-weather-widget/day-weather-widget.component';
import { DaysWeatherListComponent } from './Components/days-weather-list/days-weather-list.component';
import { TodayWeatherComponent } from './Components/today-weather/today-weather.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ViewComponent } from './Pages/view/view.component';
import { SearchPipe } from './Pipes/search.pipe';
import { TitleComponent } from './Components/title/title.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: ':city', component: MainPageComponent },
  { path: ':city/:day', component: ViewComponent },
  { path: '**', component: MainPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DayWeatherWidgetComponent,
    DaysWeatherListComponent,
    TodayWeatherComponent,
    MainPageComponent,
    ViewComponent,
    SearchPipe,
    TitleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
