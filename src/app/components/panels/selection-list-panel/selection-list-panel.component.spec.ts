import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionListPanelComponent } from './selection-list-panel.component';

describe('SelectionListPanelComponent', () => {
  let component: SelectionListPanelComponent;
  let fixture: ComponentFixture<SelectionListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionListPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
