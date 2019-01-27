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

    this.setDecisionesUno = [ '../../../../assets/decisionUno01.png',
                        '../../../../assets/decisionUno02.png',
                        '../../../../assets/decisionUno03.png'];

    this.setDecisionesDos = [ '../../../../assets/decisionDos01.png',
                       '../../../../assets/decisionDos02.png',
                       '../../../../assets/decisionDos03.png'];

    this.setDecisionesTres = [ '../../../../assets/decisionTres01.png',
                         '../../../../assets/decisionTres02.png',
                         '../../../../assets/decisionTres03.png'];

    this.setDecisionesCuatro = [ '../../../../assets/decisionCuatro01.png',
                                 '../../../../assets/decisionCuatro02.png',
                                 '../../../../assets/decisionCuatro03.png'];

    this.setDecisionesCinco = [ '../../../../assets/decisionCinco01.png',
                          '../../../../assets/decisionCinco02.png',
                          '../../../../assets/decisionCinco03.png'];

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
