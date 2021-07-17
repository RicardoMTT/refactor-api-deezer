import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchQuery } from 'src/app/store/search.query';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSelectedComponent implements OnInit {
  constructor(public searchQuery: SearchQuery) {}

  ngOnInit(): void {}
}
