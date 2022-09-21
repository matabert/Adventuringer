import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreIncreasePanelComponent } from './ability-score-increase-panel.component';

describe('AbilityScoreIncreasePanelComponent', () => {
  let component: AbilityScoreIncreasePanelComponent;
  let fixture: ComponentFixture<AbilityScoreIncreasePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityScoreIncreasePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreIncreasePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
