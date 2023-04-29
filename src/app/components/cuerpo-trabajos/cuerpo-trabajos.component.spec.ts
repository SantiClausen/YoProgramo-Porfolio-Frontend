import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoTrabajosComponent } from './cuerpo-trabajos.component';

describe('CuerpoTrabajosComponent', () => {
  let component: CuerpoTrabajosComponent;
  let fixture: ComponentFixture<CuerpoTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoTrabajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
