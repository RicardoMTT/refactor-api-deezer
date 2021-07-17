import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoPageFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
