import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  public audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  public playGaiaVoice() {
    this.audio.src = '../../../assets/sound/Gaia.wav';
    this.audio.load();
    this.audio.play();
  }

  public stopGaiaVoice() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

}
