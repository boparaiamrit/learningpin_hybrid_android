import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-trial';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {LearningPin} from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DomainPage} from "../pages/domain/domain";
import {Keyboard} from "@ionic-native/keyboard";
import {LoginPage} from "../pages/login/login";
import {GlobalProvider} from '../providers/global/global';

@NgModule({
    declarations: [
        DomainPage,
        LoginPage,
        LearningPin,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    imports: [ 
    FormsModule, 
    MbscModule,
        BrowserModule,
        IonicModule.forRoot(LearningPin),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        DomainPage,
        LoginPage,
        LearningPin,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        Keyboard,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        GlobalProvider
    ]
})
export class AppModule {
}
