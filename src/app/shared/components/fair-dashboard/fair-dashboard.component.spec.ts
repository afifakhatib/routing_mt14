import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairDashboardComponent } from './fair-dashboard.component';

describe('FairDashboardComponent', () => {
  let component: FairDashboardComponent;
  let fixture: ComponentFixture<FairDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
