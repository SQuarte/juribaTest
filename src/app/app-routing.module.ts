import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'youtubelist',
    pathMatch: 'full'
  },
  {
    path: 'youtubelist',
    loadChildren: () => import('../modules/youtube-list-page/youtube-list-page.module').then(m => m.YoutubeListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
