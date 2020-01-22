import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
	myappID = 'c5472bfa03573fdcc96eeb0681699f2b';
	constructor(private http: HttpClient) { }

	getWeather(city,callback)
	{
		if(!city)
		this.getCurPosition(pos =>
		{
			let crd = pos.coords;
			let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&appid=${this.myappID}`;
			return this.http.get(url).subscribe(w =>
			{
				w['list'] = w['list'].filter((word,index) => {return !(index % 8) });
				w['list'].forEach((weather,indx) => {
					weather['date'] = new Date(w['dt'] * 1000);
					weather['day'] = weather['date'].getDay();
					weather['date'] = new Date(weather.dt * 1000);
					let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
					let daycolors = ['#6350EF', '#28E0AE', '#FF1A9B', '#FFBB2C', '#239AFA', '#D92222', '#2160F7'];
					weather['day'] = days[weather['date'].getDay()];
					weather['color'] = daycolors[weather['date'].getDay()];
					weather.main.temp -= 273.15;
					weather.main.temp = Math.round(weather.main.temp*100)/100 ;
					weather.main.temp_max -= 273.15;
					weather.main.temp_min -= 273.15;
					weather.main.temp_max = Math.round(weather.main.temp_max*100)/100 ;
					weather.main.temp_min = Math.round(weather.main.temp_min*100)/100 ;
					weather['indx'] = indx;
				});
				
				
				callback(w);
			});
		});
		else
		{
			let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.myappID}`;
			return this.http.get(url).subscribe(w =>
				{
					w['list'] = w['list'].filter((word,index) => {return !(index % 8) });
					w['list'].forEach((weather,indx) => {
						weather['date'] = new Date(w['dt'] * 1000);
						weather['day'] = weather['date'].getDay();
						weather['date'] = new Date(weather.dt * 1000);
						let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
						let daycolors = ['#6350EF', '#28E0AE', '#FF1A9B', '#FFBB2C', '#239AFA', '#D92222', '#2160F7'];
						weather['day'] = days[weather['date'].getDay()];
						weather['color'] = daycolors[weather['date'].getDay()];
						weather.main.temp -= 273.15;
						weather.main.temp = Math.round(weather.main.temp*100)/100 ;
						weather.main.temp_max -= 273.15;
						weather.main.temp_min -= 273.15;
						weather.main.temp_max = Math.round(weather.main.temp_max*100)/100 ;
						weather.main.temp_min = Math.round(weather.main.temp_min*100)/100 ;
						weather['indx'] = indx;
					});
					
					
					
					callback(w);
				});
		}


	
	}

	getCurPosition(callback)
	{
		let options = 
		{
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		function error(err) 
		{
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(callback, error, options);
		
	}

	getNearCities(callback)
	{
		this.getCurPosition(pos =>
		{
			let crd = pos.coords;
			let count = 50;
			let url = `https://api.openweathermap.org/data/2.5/find?lat=${crd.latitude}&lon=${crd.longitude}&appid=${this.myappID}&&cnt=${count}`;
			return this.http.get(url).subscribe(w =>
			{
				w['list'].forEach((ele,indx,arr) => {
					arr[indx] = ele.name;
				});

				callback(w);
			});
		});
	}

	private name() {
		
	}
}
