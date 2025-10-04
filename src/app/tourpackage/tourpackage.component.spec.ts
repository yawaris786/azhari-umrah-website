import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpackageComponent } from './tourpackage.component';

describe('TourpackageComponent', () => {
  let component: TourpackageComponent;
  let fixture: ComponentFixture<TourpackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourpackageComponent]
    });
    fixture = TestBed.createComponent(TourpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
