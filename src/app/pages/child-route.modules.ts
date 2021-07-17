import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { RecentComponent } from './recent/recent.component';
import { SongsComponent } from './songs/songs.component';

const childRoutes: Routes = [
  { path: '', component: RecentComponent, data: { titulo: 'Dashboard' } },
  {
    path: 'recent',
    component: RecentComponent,
    data: { titulo: 'Ajustes de cuenta' },
  },
  {
    path: 'artist',
    component: ArtistComponent,
    data: { titulo: 'Ajustes de cuenta' },
  },
  {
    path: 'songs',
    component: SongsComponent,
    data: { titulo: 'Ajustes de cuenta' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
