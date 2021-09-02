import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectionHeaderComponent } from './custom-selection-header.component';

describe('CustomSelectionHeaderComponent', () => {
  let component: CustomSelectionHeaderComponent;
  let fixture: ComponentFixture<CustomSelectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
