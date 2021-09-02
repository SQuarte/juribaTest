import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { YoutubeUtils } from '../../../../../../core/utils/youtube.utils';

@Component({
  selector: 'app-custom-title-cell',
  templateUrl: './custom-title-cell.component.html',
  styleUrls: ['./custom-title-cell.component.scss']
})
export class CustomTitleCellComponent implements AgRendererComponent {
  url: string = '';
  title: string = '';

  constructor() { }

  agInit(params: ICellRendererParams): void {
    const data = params.data;
    this.url = YoutubeUtils.linkByVideoId(data.id);
    this.title = data.title;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
