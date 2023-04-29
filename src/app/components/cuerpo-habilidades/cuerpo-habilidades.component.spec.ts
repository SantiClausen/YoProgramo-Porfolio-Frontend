import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoHabilidadesComponent } from './cuerpo-habilidades.component';

describe('CuerpoHabilidadesComponent', () => {
  let component: CuerpoHabilidadesComponent;
  let fixture: ComponentFixture<CuerpoHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
