import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, fadeIn } from 'ng-animate';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css'],
  animations: [
    trigger('pulse', [transition('* => *', useAnimation(pulse, {params: { timing: 2, delay: 0.5}}))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {params: { timing: 2, delay: 0.5}}))])
  ]
})
export class CreditsComponent implements OnInit {

  public showCredits: boolean;

  public pulse: any;
  public fadeIn: any;
  constructor() {
    this.showCredits = false;
  }

  ngOnInit() {
    this.display();
  }

  public display() {
    setTimeout(() => {
      this.showCredits = true;
    }, 2000);
  }

}
