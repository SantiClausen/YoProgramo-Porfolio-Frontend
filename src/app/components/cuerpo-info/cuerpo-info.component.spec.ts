import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoInfoComponent } from './cuerpo-info.component';

describe('CuerpoInfoComponent', () => {
  let component: CuerpoInfoComponent;
  let fixture: ComponentFixture<CuerpoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
