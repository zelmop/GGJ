import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, flash, fadeInLeft, pulse } from 'ng-animate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css'],
  animations: [
    trigger('bounce', [ transition('* => *', useAnimation(bounce, {params: { timing: 3, delay: 0.5, a:'-30px', b: '25px', c: '-5px', d: '15px' }}))]),
    trigger('flash', [transition('* => *', useAnimation(flash, { params: {timing: 5, delay: 0.5}}))]),
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, { params: {timing: 5, delay: 0.5}}))]),
    trigger('pulse', [transition('* => *', useAnimation(pulse, {params: { timing: 2, delay: 0.5}}))])
  ]
})

export class TextoComponent implements OnInit {

  public bounce: any;
  public flash: any;
  public fadeInLeft: any;
  public pulse: any;

  public continue: boolean;

  public audio: any;

  constructor( private route: Router) {
    this.continue = false;
    this.audio = new Audio();
  }

  ngOnInit() {
    setTimeout(() => {
      this.continue = true;
    }, 5000);
  }

  public continuar() {
    this.stopMainAudio();
    this.route.navigate(['/home']);
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

}
