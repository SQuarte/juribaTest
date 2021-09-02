import { createAction, props } from '@ngrx/store';
import { YoutubeSearchItemI } from '../../../core/models/youtube.models';

export const fetchYoutubeListData = createAction(
  '[YoutubeListPage] fetchYoutubeListData'
);

export const fetchYoutubeListDataSuccess = createAction(
  '[YoutubeListPage] fetch YoutubeListData Success',
  props<{ data: YoutubeSearchItemI[] }>()
);

export const fetchYoutubeListDataFailure = createAction(
  '[YoutubeListPage] fetch YoutubeListDataSuccess Failure',
  props<{ error: any }>()
);


export const changeSelectionAll = createAction('[YoutubeListPage] change selection all',
  props<{ selection: boolean }>()
);

export const selectRow = createAction('[YoutubeListPage] select row',
  props<{ id: string, selection: boolean }>()
)
