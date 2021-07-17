import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SongsComponent } from './songs/songs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecentComponent } from './recent/recent.component';
import { ItemSelectedComponent } from './item-selected/item-selected.component';
import { TestDirective } from '../test.directive';

@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    PlayerComponent,
    SearchComponent,
    AlbumComponent,
    ArtistComponent,
    SongsComponent,
    RecentComponent,
    ItemSelectedComponent,
    TestDirective,
  ],
  imports: [CommonModule, PagesRoutingModule, ReactiveFormsModule],
})
export class PagesModule {}
