import { EntityState, ID } from '@datorama/akita';
import { Datum } from 'src/models/result.model';

export interface SearchState extends EntityState<Datum[]> {
  resultsID: ID;
  isNewCancion: boolean;
}

export function createInitialState(): SearchState {
  return {
    resultsID: '',
    isNewCancion: true,
  };
}
