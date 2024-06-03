import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuestionariosComponent } from './form-cuestionarios.component';

describe('FormCuestionariosComponent', () => {
  let component: FormCuestionariosComponent;
  let fixture: ComponentFixture<FormCuestionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCuestionariosComponent]
    });
    fixture = TestBed.createComponent(FormCuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
