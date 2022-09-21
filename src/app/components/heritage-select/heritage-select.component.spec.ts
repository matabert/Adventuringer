import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageSelectComponent } from './heritage-select.component';

describe('HeritageSelectComponent', () => {
  let component: HeritageSelectComponent;
  let fixture: ComponentFixture<HeritageSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
