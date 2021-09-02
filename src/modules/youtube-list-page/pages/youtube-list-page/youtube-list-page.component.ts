import { Component, OnInit } from '@angular/core';
import { YoutubeListPageProxy } from '../../__redux/youtube-list-page.proxy';
import { CustomSelectionHeaderComponent } from './grid/custom-selection-header/custom-selection-header.component';
import { CustomSelectionCellComponent } from './grid/custom-selection-cell/custom-selection-cell.component';
import { CustomTitleCellComponent } from './grid/custom-title-cell/custom-title-cell.component';
import { CustomThumbnailsCellComponent } from './grid/custom-thumbnails-cell/custom-thumbnails-cell.component';
import { YoutubeUtils } from '../../../../core/utils/youtube.utils';
import { youtubeColDefsList, youtubeColDefsListFull } from './grid/youtube-column-defs';

@Component({
  selector: 'app-youtube-list-page',
  templateUrl: './youtube-list-page.component.html',
  styleUrls: ['./youtube-list-page.component.scss'],

})
export class YoutubeListPageComponent implements OnInit {
  listItems: any[] = [];
  selectionMode = false;
  itemsCount$ = this.youtubeListPageProxy.itemsCount$;
  selectedItemsCount$ = this.youtubeListPageProxy.selectedItemsCount$;
  getRowNodeId: any;

  frameworkComponents = {
    'customTitle' : CustomTitleCellComponent,
    'customThumbnails': CustomThumbnailsCellComponent,
    'customSelectionHeader': CustomSelectionHeaderComponent,
    'customSelectionCell' : CustomSelectionCellComponent
  };
  private gridApi: any;
  private gridColumnApi: any;

  constructor(private youtubeListPageProxy: YoutubeListPageProxy) {
    youtubeListPageProxy.listItems$.subscribe((res) => {
      this.listItems = res;
    });

    this.getRowNodeId = function (data: any) {
      return data.id;
    };
  }

  ngOnInit(): void {
    this.youtubeListPageProxy.fetchYoutubeData();
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;
    this.gridApi.setColumnDefs(youtubeColDefsList);
    this.gridApi.addEventListener('customSelectionChanged', (v: any) => {
      this.youtubeListPageProxy.selectRow(this.listItems[v.rowIndex].id , v.value)
    })
  }

  changeSelectionMode(value: boolean) {
    this.selectionMode = value;
    this.selectionMode ? this.gridApi.setColumnDefs(youtubeColDefsListFull) : this.gridApi.setColumnDefs(youtubeColDefsList)
  }

  getContextMenuItems(params: any) {
    const colId = params.column.colId;
    const item = params.node.data;
    if (colId === 'title') {
      return  [{
        name: 'Open in new tab',
        action: () => {
          window.open(YoutubeUtils.linkByVideoId(item.id), '_blank')
        }
      }]
    } else {
      return [];
    }
  }
}

