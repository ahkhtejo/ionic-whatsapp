import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public userservice: UserProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
   console.log('ionViewDidLoad PasswordresetPage');
  }

  reset() {
    let alert = this.alertCtrl.create({
      buttons: ['Ok']
    });
    this.userservice.passwordreset(this.email).then((res: any) => {
      if (res.success) {
        alert.setTitle('Email Sent');
        alert.setSubTitle('رجاء اتبع الخطوات على هذا الايميل للتمن من اعدة كلمة الر ');
      }
      else {
        alert.setTitle('Failed');
      }
    })
  }

  goback() {
    this.navCtrl.setRoot('LoginPage');
  }

}