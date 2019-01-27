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

  @ViewChild( 'myCanvas' ) canvas: ElementRef;
  constructor( public dialog: MatDialog, private route: Router ) { }

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

  public checkEvent(event) {
    console.log(event);
  }

  public decidir(decision) {
      const dialogRef = this.dialog.open(DecisionComponent, {
        width: '700px',
        data: { case: decision }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.asserts++;
        } else {
          this.life -= 1;
        }
      });

      if (this.life === 0) {
        this.route.navigate(['/lose']);
      }

      if (this.asserts === 4) {
        this.route.navigate(['/win']);
      }
  }

}
