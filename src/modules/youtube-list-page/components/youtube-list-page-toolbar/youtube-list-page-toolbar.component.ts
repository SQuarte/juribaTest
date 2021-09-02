import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-youtube-list-page-toolbar',
  templateUrl: './youtube-list-page-toolbar.component.html',
  styleUrls: ['./youtube-list-page-toolbar.component.scss']
})
export class YoutubeListPageToolbarComponent {
  @Input() totalCount: any = 0;
  @Input() selectedCount: any = 0;
  @Input() selectionMode = false;
  @Output() selectionModeChange = new EventEmitter()

  constructor() { }

}
