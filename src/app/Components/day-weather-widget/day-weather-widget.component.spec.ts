import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWeatherWidgetComponent } from './day-weather-widget.component';

describe('DayWeatherWidgetComponent', () => {
  let component: DayWeatherWidgetComponent;
  let fixture: ComponentFixture<DayWeatherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayWeatherWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
