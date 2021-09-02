import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeListPageActions } from './index';
import { catchError, concatMap, map } from 'rxjs/operators';
import { YoutubeListService } from '../../../core/services/youtube-list.service';
import { of } from 'rxjs';


@Injectable()
export class YoutubeListPageEffects {
  constructor(private actions$: Actions,
              private youtubeListService: YoutubeListService) {}

  fetchYoutubeData$ = createEffect(() => this.actions$.pipe(
    ofType(YoutubeListPageActions.fetchYoutubeListData),
    concatMap(() => {
      return this.youtubeListService.getYoutubeData().pipe(
        map(res => YoutubeListPageActions.fetchYoutubeListDataSuccess({data: Object.values(res.items)})),
        catchError((error) => of(YoutubeListPageActions.fetchYoutubeListDataFailure({ error })))
      )
    })
  ));

}
