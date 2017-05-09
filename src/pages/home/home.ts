import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  watch: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.watch = this.geolocation.watchPosition();
    this.watch.subscribe((resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);
    });
  }

  ionViewWillLeave(){
    this.watch.unsubscribe();
  }

}
