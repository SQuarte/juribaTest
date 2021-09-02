import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { YoutubeSearchItemI } from '../../../core/models/youtube.models';
import { YoutubeListPageActions } from './index';

export const youtubeListPageFeatureKey = 'youtubeListPage';

export interface State {
  loading: boolean;
  items: YoutubeListStoreItemI[];
}

export interface YoutubeListStoreItemI {
  id: string,
  selection: boolean,
  title: string,
  publishedAt: string,
  description: string,
  thumbnails: any
}

const initialState: State = {
  loading: false,
  items: []
};

export const youtubeListPageReducer = createReducer(
  initialState,
  on(YoutubeListPageActions.fetchYoutubeListData, (state, action) => ({
    ...state,
    loading: true,
    items: []
  })),
  on(YoutubeListPageActions.fetchYoutubeListDataSuccess, (state, action) => ({
    ...state,
    loading: false,
    items: action.data.map(d => toData(d))
  })),
  on(YoutubeListPageActions.fetchYoutubeListDataFailure, (state, action) => ({
    ...state,
    loading: false
  })),
  on(YoutubeListPageActions.changeSelectionAll, (state, action) => {
    const items  = [...state.items].map(s => ({
      ...s,
      selection: action.selection
    }));
    return {
      ...state,
      items
    }
  }),
  on(YoutubeListPageActions.selectRow,(state, action) => {
    const items  = [...state.items].map(s => ({
      ...s,
      selection: s.id === action.id ? action.selection : s.selection
    }));
    return {
      ...state,
      items
    }
  })
);


export const selectYoutubeListPage = createFeatureSelector<State>(youtubeListPageFeatureKey);
export const selectYoutubeListData = createSelector(
  selectYoutubeListPage,
  (state) => state.items
);
export const selectYoutubeListDataCount = createSelector(
  selectYoutubeListData,
  (state) => state.length || 0
)

export const selectYoutubeListDataSelectedCount = createSelector(
  selectYoutubeListData,
  (state) => state.reduce((acc,val) => acc + Number(val.selection), 0)
)


export const selectAllItemsSelected = createSelector(
  selectYoutubeListData,
  (state) => state.every(item => item.selection)
)


function toData(res: YoutubeSearchItemI) {
  return {
    id: res.id.videoId,
    selection: false,
    title: res.snippet.title,
    publishedAt: res.snippet.publishedAt,
    description: res.snippet.description,
    thumbnails: res.snippet.thumbnails.default
  }
}
