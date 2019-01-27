import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogData } from '../main/main.component';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  public imagen: string;
  public case: number;

  public setDecisionesUno: string[] = [];
  public setDecisionesDos: string[] = [];
  public setDecisionesTres: string[] = [];
  public setDecisionesCuatro: string[] = [];
  public setDecisionesCinco: string[] = [];

  public setFinal: any;

  public audio = new Audio();

  constructor( public dialogRef: MatDialogRef<DecisionComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.case = this.data.case;

    this.setDecisionesUno = [ '../../../../assets/decisionUno01.jpg',
                        '../../../../assets/decisionUno02.jpg',
                        '../../../../assets/decisionUno03.jpg'];

    this.setDecisionesDos = [ '../../../../assets/decisionDos01.jpg',
                       '../../../../assets/decisionDos02.jpg',
                       '../../../../assets/decisionDos03.jpg'];

    this.setDecisionesTres = [ '../../../../assets/decisionTres01.jpg',
                         '../../../../assets/decisionTres02.jpg',
                         '../../../../assets/decisionTres03.jpg'];

    this.setDecisionesCuatro = [ '../../../../assets/decisionCuatro01.png',
                                 '../../../../assets/decisionCuatro02.png',
                                 '../../../../assets/decisionCuatro03.png'];

    this.setDecisionesCinco = [ '../../../../assets/decisionCinco01.jpg',
                          '../../../../assets/decisionCinco02.jpg',
                          '../../../../assets/decisionCinco03.jpg'];

  }

  ngOnInit() {
    switch(this.case){
      case 1:
        this.imagen = this.setDecisionesUno[0];
        break;
      case 2:
        this.imagen = this.setDecisionesDos[0];
        break;
      case 3:
        this.imagen = this.setDecisionesTres[0];
        break;
      case 4:
        this.imagen = this.setDecisionesCuatro[0];
        break;
      case 5:
        this.imagen = this.setDecisionesCinco[0];
        break;
      default:
        break;
    }
  }

  public playClickedAudio() {
    this.audio.src = '../../../assets/sound/click2.wav';
    this.audio.load();
    this.audio.play();
  }

  public stopClickedAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  decision(decisionTomada: boolean) {
    let that = this;

    switch(that.case) {
      case 1:
        if (decisionTomada) {
          that.imagen = that.setDecisionesUno[1];
        } else {
          that.imagen = that.setDecisionesUno[2];
        }
        break;
      case 2:
        if (decisionTomada) {
          that.imagen = that.setDecisionesDos[1];
        } else {
          that.imagen = that.setDecisionesDos[2];
        }
        break;
      case 3:
        if (decisionTomada) {
          that.imagen = that.setDecisionesTres[1];
        } else {
          that.imagen = that.setDecisionesTres[2];
        }
        break;
      case 4:
        if (decisionTomada) {
          that.imagen = that.setDecisionesCuatro[1];
        } else {
          that.imagen = that.setDecisionesCuatro[2];
        }
        break;
      case 5:
        if (decisionTomada) {
          that.imagen = that.setDecisionesCinco[1];
        } else {
          that.imagen = that.setDecisionesCinco[2];
        }
        break;
      default:
        break;
    }

    setTimeout(() => {
      this.dialogRef.close(decisionTomada);
    }, 300);

  }

}
