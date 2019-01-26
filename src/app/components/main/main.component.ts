import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { KonvaComponent } from 'ng2-konva';

import { MatDialog } from '@angular/material';
import { DecisionComponent } from '../decision/decision.component';

export interface DialogData {
  case: number;
}

declare const Konva: any;
let ng: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('stage') stage: KonvaComponent;
  @ViewChild('layer') layer: KonvaComponent;
  @ViewChild('circle') cirlce: KonvaComponent;

  public width = 800;
  public height = 400;
  public list: Array<any> = [];

  public life = 3;
  public asserts = 0;

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
    ng = this;

    for (let n = 0; n < 25; n++) {
      let color = '';
      let radius: number;
      if (n % 5) {
        color = 'white';
        radius = 5;
      } else {
        color = 'red';
        radius = 8;
      }
      let x = Math.random() * 750;
      let y = Math.random() * 300;

      if (x <= 0) {
        x += 10;
      }
      if (x > 400) {
        x -= 10;
      }

      if (y > 800) {
        y -= 10;
      }
      if (y <= 0) {
        y += 10;
      }

      this.list.push(
        new BehaviorSubject({
          x: x,
          y: y,
          radius: radius,
          fill: color,
          opacity: 0.5
        })
      );
    }
  }

  public configStage: Observable<any> = of({
    width: this.width,
    height: this.height
  });

  public handleClick(circle, decision) {
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

      }

      if (this.asserts === 4) {
        
      }
  }
  public handleMouseEnter(item: any) {
  }
  public handleMouseLeave(component) {
    //console.log('sali');
  }

}
