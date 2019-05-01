import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesChartComponent } from './images-chart.component';

describe('ImagesChartComponent', () => {
  let component: ImagesChartComponent;
  let fixture: ComponentFixture<ImagesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
