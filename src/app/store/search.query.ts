import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { first, switchMap, take, tap } from 'rxjs/operators';
import { SearchState } from './search.state';
import { SearchStore } from './search.store';

@Injectable({
  providedIn: 'root',
})
export class SearchQuery extends QueryEntity<SearchState> {
  constructor(store: SearchStore) {
    super(store);
  }
  result$ = this.selectAll({
    limitTo: 10,
  });

  currentID$ = this.select((state) => state.resultsID);
  isNewCancion$ = this.select((state) => state.isNewCancion);
  itemCurrent$ = this.select((state) => state.resultsID).pipe(
    tap((id) => console.log('IDD:', id)),
    switchMap((id) => this.selectEntity(id))
  );
}
