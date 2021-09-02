import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';
import { YoutubeListPageProxy } from '../../../../__redux/youtube-list-page.proxy';

@Component({
  selector: 'app-custom-selection-header',
  templateUrl: './custom-selection-header.component.html',
  styleUrls: ['./custom-selection-header.component.scss']
})
export class CustomSelectionHeaderComponent  implements IHeaderAngularComp  {
  public params: any;
  value$ = this.youtubeListProxy.allItemsSelected$;

  constructor(private youtubeListProxy: YoutubeListPageProxy) {}

  agInit(params: IHeaderParams): void {
    this.params = params;
  }

  changeHeaderSelection(value: boolean) {
    value ? this.youtubeListProxy.selectAll() : this.youtubeListProxy.deselectAll();
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }

}
