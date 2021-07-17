import { EntityStore, Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { SearchState } from './search.state';

@StoreConfig({
  name: 'search',
})
@Injectable({
  providedIn: 'root',
})
export class SearchStore extends EntityStore<SearchState> {
  constructor() {
    super({});
  }
}
