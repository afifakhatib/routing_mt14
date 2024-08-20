import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDashboardComponent } from './prod-dashboard.component';

describe('ProdDashboardComponent', () => {
  let component: ProdDashboardComponent;
  let fixture: ComponentFixture<ProdDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
