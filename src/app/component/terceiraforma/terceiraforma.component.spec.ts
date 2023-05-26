import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraformaComponent } from './terceiraforma.component';

describe('TerceiraformaComponent', () => {
  let component: TerceiraformaComponent;
  let fixture: ComponentFixture<TerceiraformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiraformaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiraformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
