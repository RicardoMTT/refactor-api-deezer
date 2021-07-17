import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
