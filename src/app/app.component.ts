import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";
import {TabsPage} from "../pages/tabs/tabs";
import {LoginPage} from "../pages/login/login";

@Component({
    templateUrl: 'app.html'
})
export class LearningPin {
    rootPage: any;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                storage: Storage) {
        platform.ready()
            .then(() => {
                statusBar.styleDefault();
                splashScreen.hide();

                storage.get('is_logged_in')
                    .then((isLoggedIn: boolean = false) => {
                        if (isLoggedIn) {
                            this.rootPage = TabsPage;
                        } else {
                            this.rootPage = LoginPage;
                        }
                    })
                    .catch(() => {
                        this.rootPage = LoginPage;
                    });
            });
    }
}
