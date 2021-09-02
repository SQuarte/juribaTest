import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTitleCellComponent } from './custom-title-cell.component';

describe('CustomTitleCellComponent', () => {
  let component: CustomTitleCellComponent;
  let fixture: ComponentFixture<CustomTitleCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTitleCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTitleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
