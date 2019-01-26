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

  constructor( public dialogRef: MatDialogRef<DecisionComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.case = this.data.case;
    console.log(this.case);

    this.setDecisionesUno = [ '../../../../assets/decisionUno01.jpg',
                        '../../../../assets/decisionUno02.jpg',
                        '../../../../assets/decisionUno03.jpg'];

    this.setDecisionesDos = [ '../../../../assets/decisionDos01.jpg',
                       '../../../../assets/decisionDos02.jpg',
                       '../../../../assets/decisionDos03.jpg'];

    this.setDecisionesTres = [ '../../../../assets/decisionTres01.jpg',
                         '../../../../assets/decisionTres02.jpg',
                         '../../../../assets/decisionTres03.jpg'];

    this.setDecisionesCuatro = [ '../../../../assets/decisionCuatro01.jpg',
                           '../../../../assets/decisionCuatro02.jpg',
                           '../../../../assets/decisionCuatro03.jpg'];

    this.setDecisionesCinco = [ '../../../../assets/decisionCinco01.jpg',
                          '../../../../assets/decisionCinco02.jpg',
                          '../../../../assets/decisionCinco03.jpg'];

  }

  ngOnInit() {
    switch(this.case){
      case 0:
        this.imagen = this.setDecisionesUno[0];
        break;
      case 5:
        this.imagen = this.setDecisionesDos[0];
        break;
      case 10:
        this.imagen = this.setDecisionesTres[0];
        break;
      case 15:
        this.imagen = this.setDecisionesCuatro[0];
        break;
      case 20:
        this.imagen = this.setDecisionesCinco[0];
        break;
      default:
        break;
    }

    console.log(this.imagen);
  }

  decision(decisionTomada: boolean) {
    if (decisionTomada && this.case === 0) {
      this.imagen = this.setDecisionesUno[1];
    } else {
      this.imagen = this.setDecisionesUno[2];
    }

    if (decisionTomada && this.case === 5) {
      this.imagen = this.setDecisionesDos[1];
    } else {
      this.imagen = this.setDecisionesDos[2];
    }

    if (decisionTomada && this.case === 10) {
      this.imagen = this.setDecisionesTres[1];
    } else {
      this.imagen = this.setDecisionesTres[2];
    }

    if (decisionTomada && this.case === 15) {
      this.imagen = this.setDecisionesCuatro[1];
    } else {
      this.imagen = this.setDecisionesCuatro[2];
    }

    if (decisionTomada && this.case === 20) {
      this.imagen = this.setDecisionesCinco[1];
    } else {
      this.imagen = this.setDecisionesCinco[2];
    }

    setTimeout(() => {
      this.dialogRef.close(decisionTomada);
    }, 2500);

  }

}
