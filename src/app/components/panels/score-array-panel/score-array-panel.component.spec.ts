import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreArrayPanelComponent } from './score-array-panel.component';

describe('ScoreArrayPanelComponent', () => {
  let component: ScoreArrayPanelComponent;
  let fixture: ComponentFixture<ScoreArrayPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreArrayPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreArrayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
