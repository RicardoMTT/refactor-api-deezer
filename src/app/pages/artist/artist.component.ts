import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
