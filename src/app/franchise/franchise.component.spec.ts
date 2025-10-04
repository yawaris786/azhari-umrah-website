import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseComponent } from './franchise.component';

describe('FranchiseComponent', () => {
  let component: FranchiseComponent;
  let fixture: ComponentFixture<FranchiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FranchiseComponent]
    });
    fixture = TestBed.createComponent(FranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
