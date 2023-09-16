import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvatedetailComponent } from './salvatedetail.component';

describe('SalvatedetailComponent', () => {
  let component: SalvatedetailComponent;
  let fixture: ComponentFixture<SalvatedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvatedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalvatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
