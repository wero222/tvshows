import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaSerieComponent } from './modifica-serie.component';

describe('ModificaSerieComponent', () => {
  let component: ModificaSerieComponent;
  let fixture: ComponentFixture<ModificaSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
