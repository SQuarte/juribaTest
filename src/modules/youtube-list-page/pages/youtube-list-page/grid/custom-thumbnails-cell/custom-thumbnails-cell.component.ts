import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-thumbnails-cell',
  templateUrl: './custom-thumbnails-cell.component.html',
  styleUrls: ['./custom-thumbnails-cell.component.scss']
})
export class CustomThumbnailsCellComponent implements AgRendererComponent  {
  thumbnailUrl;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    const data = params.data;
    this.thumbnailUrl = data.thumbnails.url;
  }

  refresh(params: ICellRendererParams): boolean {
    const data = params.data;
    if (this.thumbnailUrl !== data.thumbnails.url) {
      this.thumbnailUrl = data.thumbnails.url;
    }
    return true;
  }
}
