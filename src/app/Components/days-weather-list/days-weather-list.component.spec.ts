import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysWeatherListComponent } from './days-weather-list.component';

describe('DaysWeatherListComponent', () => {
  let component: DaysWeatherListComponent;
  let fixture: ComponentFixture<DaysWeatherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysWeatherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
