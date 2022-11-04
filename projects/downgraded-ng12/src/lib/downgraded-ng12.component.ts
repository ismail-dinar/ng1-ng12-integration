import { Component } from '@angular/core';

@Component({
  selector: 'downgraded-ng12',
  templateUrl: './downgraded-ng12.component.html',
})
export class DowngradedNg12Component {
  public constructor() {
    console.log(this.constructor.name);
  }
 }
