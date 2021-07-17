import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Datum } from 'src/models/result.model';
import { Imagen } from 'src/models/artist.model';

// const url = environment.backendUrl;
@Injectable({
  providedIn: 'root',
})
export class ArtistsApi {
  constructor(private http: HttpClient) {}

  getArtist(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(
      "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=eminem'"
    );
  }

  searchByKeyword(keyword: string) {
    console.log('JJJJJJJJJJJJJ');

    return this.http.get<Datum[]>(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${keyword}`
    );
  }
}
