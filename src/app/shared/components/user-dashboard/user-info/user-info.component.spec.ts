import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdInfoComponent } from './prod-info.component';

describe('ProdInfoComponent', () => {
  let component: ProdInfoComponent;
  let fixture: ComponentFixture<ProdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
