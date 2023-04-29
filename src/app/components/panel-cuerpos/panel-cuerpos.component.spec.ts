import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCuerposComponent } from './panel-cuerpos.component';

describe('PanelCuerposComponent', () => {
  let component: PanelCuerposComponent;
  let fixture: ComponentFixture<PanelCuerposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCuerposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCuerposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
