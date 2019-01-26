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
  constructor( public dialogRef: MatDialogRef<DecisionComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.imagen = '../../../../assets/test01.jpg';
  }

  ngOnInit() {
  }

  decision(decisionTomada: string) {
    this.dialogRef.close(decisionTomada);
  }

}
