import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ArtistsApi } from '../api/artist.api';
import { SearchStore } from '../store/search.store';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(
    private artistsApi: ArtistsApi,
    private searchStore: SearchStore
  ) {}

  getArtist() {
    this.artistsApi.getArtist().subscribe(console.log);
  }

  searchByKeyword(keyword: string) {
    this.artistsApi
      .searchByKeyword(keyword)
      .pipe(
        tap((val: any) => {
          this.searchStore.remove();
          console.log('val');

          this.searchStore.upsertMany(val.data);
          this.searchStore.update((state) => {
            return {
              ...state,
              resultsID: val.data[0].id,
              isNewCancion: true,
            };
          });
        })
      )
      .subscribe();
  }
}
