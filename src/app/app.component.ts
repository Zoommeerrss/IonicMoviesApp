import { Component, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  //field to control the splash showing
  routerHidden = true;

  //view splash config
  @ViewChild('splash', {static: false})
  splash: ElementRef;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //when the time is out, the splash will be hide after 3000 (3 secs)
      setTimeout(() => {
        this.routerHidden = false;
        this.splash.nativeElement.style.display = 'none';
      }, 5000);
    });
  }
}
