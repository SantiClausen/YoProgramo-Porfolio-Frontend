import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoEducacionComponent } from './cuerpo-educacion.component';

describe('CuerpoEducacionComponent', () => {
  let component: CuerpoEducacionComponent;
  let fixture: ComponentFixture<CuerpoEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
