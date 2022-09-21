import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreAllocationComponent } from './ability-score-allocation.component';

describe('AbilityScoreAllocationComponent', () => {
  let component: AbilityScoreAllocationComponent;
  let fixture: ComponentFixture<AbilityScoreAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityScoreAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
