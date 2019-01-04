import { Component } from '@angular/core';

/**
 * Generated class for the GropPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'grop-page',
  templateUrl: 'grop-page.html'
})
export class GropPageComponent {

  text: string;

  constructor() {
    console.log('Hello GropPageComponent Component');
    this.text = 'Hello World';
  }

}
