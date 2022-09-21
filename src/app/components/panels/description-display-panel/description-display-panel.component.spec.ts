import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionDisplayPanelComponent } from './description-display-panel.component';

describe('DescriptionDisplayPanelComponent', () => {
  let component: DescriptionDisplayPanelComponent;
  let fixture: ComponentFixture<DescriptionDisplayPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionDisplayPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionDisplayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
