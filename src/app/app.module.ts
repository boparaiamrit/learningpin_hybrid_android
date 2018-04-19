import {FormsModule} from '@angular/forms';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import {LearningPin} from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {TabsPage} from '../pages/tabs/tabs';
import {HTTP} from '@ionic-native/http';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from "@ionic-native/keyboard";
import {LoginPage} from "../pages/login/login";
import {GlobalProvider} from '../providers/global/global';
import {TrainingsPage} from "../pages/trainings/trainings";
import {AssessmentsPage} from "../pages/assessments/assessments";
import {LearningsPage} from "../pages/learnings/learnings";
import {AttemptAssessmentPage} from "../pages/attempt-assessment/attempt-assessment";
import {AssessmentDetailPage} from "../pages/assessment-detail/assessment-detail";
import {RoundProgressModule} from "angular-svg-round-progressbar";

@NgModule({
    declarations: [
        LearningPin,
        LoginPage,
        TabsPage,
        TrainingsPage,
        AssessmentsPage,
        LearningsPage,
        AssessmentDetailPage,
        AttemptAssessmentPage,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RoundProgressModule,
        IonicModule.forRoot(LearningPin),
        IonicStorageModule.forRoot({
            name: 'learning_pin',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        LearningPin,
        LoginPage,
        TabsPage,
        TrainingsPage,
        AssessmentsPage,
        LearningsPage,
        AssessmentDetailPage,
        AttemptAssessmentPage,
    ],
    providers: [
        HTTP,
        Keyboard,
        StatusBar,
        SplashScreen,
        GlobalProvider,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
