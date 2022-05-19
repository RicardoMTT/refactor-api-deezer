import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { SearchQuery } from '../../store/search.query';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  isPlay: boolean = false;
  audio: HTMLAudioElement;

  volumen: any;
  isMute: boolean = false;

  playerPercentage$: any = 0;
  timeRemaining$: any = '-00:00';
  playerStatus$: any = 'paused';
  timeElapsed$ = '00:00';

  constructor(public searchQuery: SearchQuery, private cdr: ChangeDetectorRef) {
    this.audio = new Audio();
    this.searchQuery.itemCurrent$.subscribe((data: any) => {
      // this.setAudio(data.priview);
      if (data) {
        this.setAudio(data.preview);
        this.playerStatus$ = 'paused';
      }
    });
    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private setPlayerStatus = (state: any) => {
    console.log(state);

    switch (
      state.type //TODO: --> playing
    ) {
      case 'play':
        this.playerStatus$ = 'play';
        this.cdr.detectChanges();
        break;
      case 'playing':
        this.playerStatus$ = 'playing';
        this.cdr.detectChanges();
        break;
      case 'ended':
        this.playerStatus$ = 'ended';
        this.cdr.detectChanges();
        break;
      case 'pause':
        this.playerStatus$ = 'paused';
        this.cdr.detectChanges();
        break;
      default:
        this.playerStatus$ = 'paused';
        this.cdr.detectChanges();
        break;
    }
  };

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setRemaining(currentTime, duration);
    this.setPercentage(currentTime, duration);
  };

  private setPercentage(currentTime: number, duration: number): void {
    //TODO duration ---> 100%
    //TODO currentTime ---> (x)
    //TODO (currentTime * 100) / duration
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$ = percentage;
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60); //TODO 1,2,3
    let minutes = Math.floor((currentTime / 60) % 60);
    //TODO  00:00 ---> 01:05 --> 10:15
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$ = displayFormat;
    this.cdr.detectChanges();
  }

  private setRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$ = displayFormat;
    this.cdr.detectChanges();
  }

  //TODO: Funciones publicas

  public setAudio(url): void {
    this.audio.src = url;
    // this.audio.play();
  }

  public togglePlayer(): void {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const percentageToSecond = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
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
