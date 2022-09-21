import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionGridPanelComponent } from './selection-grid-panel.component';

describe('SelectionGridPanelComponent', () => {
  let component: SelectionGridPanelComponent;
  let fixture: ComponentFixture<SelectionGridPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionGridPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionGridPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
