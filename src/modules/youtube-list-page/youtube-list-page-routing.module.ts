import { RouterModule, Routes } from '@angular/router';
import { YoutubeListPageComponent } from './pages/youtube-list-page/youtube-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: YoutubeListPageComponent,
  }
];
export const YoutubeListRoutesModule = RouterModule.forChild(routes)
