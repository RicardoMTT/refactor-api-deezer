import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchQuery } from 'src/app/store/search.query';
import { SearchStore } from 'src/app/store/search.store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentComponent implements OnInit {
  constructor(
    public searchQuery: SearchQuery,
    private searchStore: SearchStore,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle() {
    this.title.setTitle('Recientes');
  }
  updateItemSelected(id) {
    this.searchStore.update((state) => {
      return {
        ...state,
        resultsID: id,
        isNewCancion: true,
      };
    });
  }
}
