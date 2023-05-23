import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaformaComponent } from './segundaforma.component';

describe('SegundaformaComponent', () => {
  let component: SegundaformaComponent;
  let fixture: ComponentFixture<SegundaformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaformaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
