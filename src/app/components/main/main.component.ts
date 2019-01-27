import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flash, pulse } from 'ng-animate';
import { Router } from '@angular/router';

// material
import { MatDialog } from '@angular/material';
// components
import { DecisionComponent } from '../decision/decision.component';

export interface DialogData {
  case: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('flash', [transition('* => *', useAnimation(flash, {params: {timing: 8}}))]),
    trigger('pulse', [transition('* => *', useAnimation(pulse, {params: { timing: 2, delay: 0.5}}))])
  ]
})

export class MainComponent implements AfterViewInit {
  context: CanvasRenderingContext2D;

  public life = 3;
  public asserts = 0;
  public flash: any;
  public pulse: any;

  public disable01: boolean;
  public disable02: boolean;
  public disable03: boolean;
  public disable04: boolean;
  public disable05: boolean;

  public audio = new Audio();

  @ViewChild( 'myCanvas' ) canvas: ElementRef;
  constructor( public dialog: MatDialog, private route: Router ) {
    this.disable01 = false;
    this.disable02 = false;
    this.disable03 = false;
    this.disable04 = false;
    this.disable05 = false;
  }

  ngAfterViewInit() {
    const canvas = this.canvas.nativeElement;
    this.context = canvas.getContext( '2d' );

    this.tick();
  }

  public tick() {
    const ctx = this.context;
    for (let i = 0; i < 400; i++) {
      let x = Math.floor(Math.random()*(1500)+1);
      let y = Math.floor(Math.random()*(600)+1);

      if (i % 3) {
        let color = "#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
        ctx.fillStyle = color;
      } else {
        ctx.fillStyle = 'white';
      }

      ctx.fill();
      ctx.beginPath();
      ctx.arc( x, y, 1.1, 0 ,2*Math.PI);
      ctx.stroke();
    }

  }

  public playClickAudio() {
    this.audio.src = '../../../assets/sound/click.wav';
    this.audio.load();
    this.audio.play();
  }

  public stopClickAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  public playRigthAnswer() {
    this.audio.src = '../../../assets/sound/Good.wav';
    this.audio.load();
    this.audio.play();
    setTimeout(() => {
      this.stopClickAudio();
    }, 15000);
  }

  public playWrongAnswer() {
    this.audio.src = '../../../assets/sound/Fail.wav';
    this.audio.load();
    this.audio.play();
    setTimeout(() => {
      this.stopClickAudio();
    }, 15000);
  }


  public checkEvent(event) {
    console.log(event);
  }

  public decidir(decision) {

      switch(decision){
        case 1:
          this.disable01 = true;
          break;
        case 2:
          this.disable02 = true;
          break;
        case 3:
          this.disable03 = true;
          break;
        case 4:
          this.disable04 = true;
          break;
        case 5:
          this.disable05 = true;
          break;
        default:
          break;
      }

      const dialogRef = this.dialog.open(DecisionComponent, {
        width: '700px',
        data: { case: decision }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.playRigthAnswer();
          this.asserts++;
          if (this.asserts === 4) {
            this.route.navigate(['/win']);
          }
        } else {
          this.playWrongAnswer();
          this.life -= 1;
          if (this.life === 0) {
            this.route.navigate(['/lose']);
          }
        }
      });

  }

}
