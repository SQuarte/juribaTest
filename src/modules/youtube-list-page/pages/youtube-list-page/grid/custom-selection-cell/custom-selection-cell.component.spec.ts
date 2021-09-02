import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectionCellComponent } from './custom-selection-cell.component';

describe('CustomSelectionCellComponent', () => {
  let component: CustomSelectionCellComponent;
  let fixture: ComponentFixture<CustomSelectionCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectionCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectionCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
