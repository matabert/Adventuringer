import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationStepperComponent } from './creation-stepper.component';

describe('CreationStepperComponent', () => {
  let component: CreationStepperComponent;
  let fixture: ComponentFixture<CreationStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
