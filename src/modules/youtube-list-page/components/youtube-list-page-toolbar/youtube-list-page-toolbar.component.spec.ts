import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeListPageToolbarComponent } from './youtube-list-page-toolbar.component';

describe('YoutubeListPageToolbarComponent', () => {
  let component: YoutubeListPageToolbarComponent;
  let fixture: ComponentFixture<YoutubeListPageToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeListPageToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeListPageToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
