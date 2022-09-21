import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDisplayPanelComponent } from './feature-display-panel.component';

describe('FeatureDisplayPanelComponent', () => {
  let component: FeatureDisplayPanelComponent;
  let fixture: ComponentFixture<FeatureDisplayPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDisplayPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDisplayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
