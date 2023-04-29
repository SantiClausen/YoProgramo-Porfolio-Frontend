import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInfoComponent } from './boton-info.component';

describe('BotonInfoComponent', () => {
  let component: BotonInfoComponent;
  let fixture: ComponentFixture<BotonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
