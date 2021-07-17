import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchQuery } from '../../store/search.query';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements OnInit {
  isPlay: boolean = false;
  audio: any;
  volumen: any;
  isMute: boolean = false;
  constructor(public searchQuery: SearchQuery) {}

  ngOnInit(): void {
    this.searchQuery.currentID$.subscribe((value) => {
      this.isPlay = true;
    });
  }
  playToAudio() {
    this.isPlay = !this.isPlay;
    this.audio = <HTMLVideoElement>document.getElementById('audio');
    this.volumen = <HTMLInputElement>document.querySelector('#volume');
    this.volumen.disabled = false;
    this.audio.play();
  }
  stopToAudio() {
    this.isPlay = !this.isPlay;
    this.audio = <HTMLVideoElement>document.getElementById('audio');
    this.audio.pause();
  }
  volume_change() {
    if (!this.audio) {
      return;
    }
    this.volumen = <HTMLInputElement>document.querySelector('#volume');
    this.audio.volume = Number(this.volumen.value) / 100;
    this.isMute = false;
  }

  muteVolumen() {
    this.audio.volume = 0;
    this.isMute = !this.isMute;
  }

  unMuteVolumen() {
    this.audio.volume = 0.5;
    this.isMute = !this.isMute;
  }
}
