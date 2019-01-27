import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, AfterViewInit {

  public audio: any;

  constructor( private router: Router) {
    this.audio = new Audio();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  public playMainAudio() {
    this.audio.src = '../../../assets/sound/main.wav';
    this.audio.load();
    this.audio.play();
  }

  public stopMainAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  public iniciar() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.router.navigate(['/texto']);
  }

  public creditos() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.router.navigate(['/credits']);
  }
}
