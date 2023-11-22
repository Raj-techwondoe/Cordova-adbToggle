import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare let cordova: any;
declare let rootdetection: any;
declare let custom: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  adbStatus: string | undefined;
  disableTimer: number = 60000;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const timer = setTimeout(() => {
        this.disable();
        clearTimeout(timer);
      }, 1000);
    });
  }

  checkRootStatus() {
    rootdetection.isDeviceRooted(
      (isRooted: any) => {
        console.log('Is device rooted?' + isRooted);
        // @ts-ignore
        window.ShellExec.exec('su', function (res) {
          console.log('exit status: ' + res.exitStatus);
          console.log('cmd output: ' + res.output);
        });
      },
      (error: any) => {
        console.log('Error checking root status' + JSON.stringify(error));
      }
    );
  }

  enable() {
    custom.enableUSBDebugging(
      () => {
        this.getStatus();
        const timer = setTimeout(() => {
          this.disable();
          clearTimeout(timer);
        }, this.disableTimer);
      },
      (error: any) => console.error('Error enabling USB debugging', error)
    );
  }
  disable() {
    custom.disableUSBDebugging(
      () => this.getStatus(),
      (error: any) => console.error('Error enabling USB debugging', error)
    );
  }
  getStatus() {
    custom.getDebuggingStatus(
      (value: any) => {
        this.adbStatus = value;
      },
      (error: any) => console.error('Error enabling USB debugging', error)
    );
  }
}
