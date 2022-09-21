import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentSelectComponent } from './alignment-select.component';

describe('AlignmentSelectComponent', () => {
  let component: AlignmentSelectComponent;
  let fixture: ComponentFixture<AlignmentSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignmentSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignmentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
