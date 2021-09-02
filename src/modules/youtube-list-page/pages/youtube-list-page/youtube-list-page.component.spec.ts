import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeListPageComponent } from './youtube-list-page.component';

describe('YoutubeListPageComponent', () => {
  let component: YoutubeListPageComponent;
  let fixture: ComponentFixture<YoutubeListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
