import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThumbnailsCellComponent } from './custom-thumbnails-cell.component';

describe('CustomThumbnailsCellComponent', () => {
  let component: CustomThumbnailsCellComponent;
  let fixture: ComponentFixture<CustomThumbnailsCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomThumbnailsCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomThumbnailsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
