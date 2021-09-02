import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeListPageToolbarComponent } from './youtube-list-page-toolbar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('YoutubeListPageToolbarComponent', () => {
  let component: YoutubeListPageToolbarComponent;
  let fixture: ComponentFixture<YoutubeListPageToolbarComponent>;
  let buttonEl: DebugElement;
  let totalCountEl: DebugElement;
  let selectedCountEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeListPageToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeListPageToolbarComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));
    totalCountEl = fixture.debugElement.query(By.css('.total-count-el'));
    selectedCountEl = fixture.debugElement.query(By.css('.selected-count-el'));
    fixture.detectChanges();
  });

  it('button click should emit selection event', () => {
    component.selectionMode = true;
    fixture.detectChanges();
    let selectionMode;
    component.selectionModeChange.subscribe((value) => selectionMode = value);
    buttonEl.triggerEventHandler('click', null);
    expect(selectionMode).toBeFalse();
  });


  it('should show total count', () => {
    component.totalCount = 10;
    fixture.detectChanges();
    const totalCountText = totalCountEl.query(By.css('b')).nativeElement.innerText;
    expect(totalCountText).toEqual('10');
  });

  it('should show selected count', () => {
    component.selectedCount = 5;
    fixture.detectChanges();
    const selectedCountText = selectedCountEl.query(By.css('b')).nativeElement.innerText;
    expect(selectedCountText).toEqual('5');
  })
});
