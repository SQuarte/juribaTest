import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeListPageComponent } from './pages/youtube-list-page/youtube-list-page.component';
import { YoutubeListRoutesModule } from './youtube-list-page-routing.module';
import { StoreModule } from '@ngrx/store';
import { youtubeListPageFeatureKey, youtubeListPageReducer } from './__redux/youtube-list-page.store';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeListPageEffects } from './__redux/youtube-list-page.effects';
import { AgGridModule } from 'ag-grid-angular';
import { YoutubeListPageToolbarComponent } from './components/youtube-list-page-toolbar/youtube-list-page-toolbar.component';
import { CustomSelectionHeaderComponent } from './pages/youtube-list-page/grid/custom-selection-header/custom-selection-header.component';
import { CustomSelectionCellComponent } from './pages/youtube-list-page/grid/custom-selection-cell/custom-selection-cell.component';
import { FormsModule } from '@angular/forms';
import { CustomTitleCellComponent } from './pages/youtube-list-page/grid/custom-title-cell/custom-title-cell.component';
import { CustomThumbnailsCellComponent } from './pages/youtube-list-page/grid/custom-thumbnails-cell/custom-thumbnails-cell.component';


@NgModule({
  declarations: [
    YoutubeListPageComponent,
    YoutubeListPageToolbarComponent,
    CustomSelectionHeaderComponent,
    CustomSelectionCellComponent,
    CustomTitleCellComponent,
    CustomThumbnailsCellComponent
  ],
  imports: [
    CommonModule,
    YoutubeListRoutesModule,
    StoreModule.forFeature(youtubeListPageFeatureKey, youtubeListPageReducer),
    EffectsModule.forFeature([YoutubeListPageEffects]),
    AgGridModule,
    FormsModule
  ]
})
export class YoutubeListPageModule { }
