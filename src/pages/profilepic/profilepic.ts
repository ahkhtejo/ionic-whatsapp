
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-profilepic',
  templateUrl: 'profilepic.html',
})
export class ProfilepicPage {
  imgurl = '../../assets/imgs/man.jpg';//profile file
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: ImghandlerProvider,
    public zone: NgZone, public userservice: UserProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  }

  chooseimage() {
    /*
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      loader.dismiss();
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
    */
   this.navCtrl.setRoot('LoginPage');
   
  }

  updateproceed() {
    /*
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.userservice.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if (res.success) {
        this.navCtrl.setRoot('TabsPage');
      }
      else {
        alert(res);
      }
    })
    */
  }

  proceed() {
    this.navCtrl.setRoot('TabsPage');
  }

  logout(){

    this.navCtrl.setRoot('LoginPage');
  }

}