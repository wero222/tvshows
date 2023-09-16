import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieSalvateComponent } from './serie-salvate.component';

describe('SerieSalvateComponent', () => {
  let component: SerieSalvateComponent;
  let fixture: ComponentFixture<SerieSalvateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieSalvateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieSalvateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
