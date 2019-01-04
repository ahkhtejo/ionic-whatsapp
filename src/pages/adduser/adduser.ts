import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }
  openProfile(){
    this.navCtrl.push('AdduserPage');
  }
  addtomyfrind(){
    this.navCtrl.push('ChatsPage');
  }


}
