import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEncabezadoComponent } from './panel-encabezado.component';

describe('PanelEncabezadoComponent', () => {
  let component: PanelEncabezadoComponent;
  let fixture: ComponentFixture<PanelEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
