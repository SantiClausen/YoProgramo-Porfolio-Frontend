import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTrabajosComponent } from './boton-trabajos.component';

describe('BotonTrabajosComponent', () => {
  let component: BotonTrabajosComponent;
  let fixture: ComponentFixture<BotonTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonTrabajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
