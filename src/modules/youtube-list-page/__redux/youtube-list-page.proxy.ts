import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  changeSelectionAll,
  fetchYoutubeListData,
  selectRow
} from './youtube-list-page.actions';
import {
  selectAllItemsSelected,
  selectYoutubeListData,
  selectYoutubeListDataCount,
  selectYoutubeListDataSelectedCount
} from './youtube-list-page.store';

@Injectable({
  providedIn: 'root'
})
export class YoutubeListPageProxy {
  listItems$ = this.store.select(selectYoutubeListData);
  itemsCount$ = this.store.select(selectYoutubeListDataCount)
  selectedItemsCount$ = this.store.select(selectYoutubeListDataSelectedCount);
  allItemsSelected$ = this.store.select(selectAllItemsSelected);

  constructor(private store: Store<any>) { }

  fetchYoutubeData() {
    this.store.dispatch(fetchYoutubeListData());
  }

  selectRow(id: string, selection: boolean) {
    this.store.dispatch(selectRow({
        id,
        selection
      })
    );
  }

  selectAll() {
    this.store.dispatch(changeSelectionAll({
      selection: true
    }))
  }

  deselectAll() {
    this.store.dispatch(changeSelectionAll({
      selection: false
    }))
  }

}
