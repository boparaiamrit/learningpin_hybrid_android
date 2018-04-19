"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const ionic_angular_1 = require("ionic-angular");
const storage_1 = require("@ionic/storage");
const app_component_1 = require("./app.component");
const angularfire2_1 = require("angularfire2");
const firestore_1 = require("angularfire2/firestore");
const environment_1 = require("../environments/environment");
const tabs_1 = require("../pages/tabs/tabs");
const http_1 = require("@ionic-native/http");
const status_bar_1 = require("@ionic-native/status-bar");
const splash_screen_1 = require("@ionic-native/splash-screen");
const keyboard_1 = require("@ionic-native/keyboard");
const login_1 = require("../pages/login/login");
const global_1 = require("../providers/global/global");
const trainings_1 = require("../pages/trainings/trainings");
const assessments_1 = require("../pages/assessments/assessments");
const learnings_1 = require("../pages/learnings/learnings");
const attempt_assessment_1 = require("../pages/attempt-assessment/attempt-assessment");
const assessment_detail_1 = require("../pages/assessment-detail/assessment-detail");
const angular_svg_round_progressbar_1 = require("angular-svg-round-progressbar");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.LearningPin,
            login_1.LoginPage,
            tabs_1.TabsPage,
            trainings_1.TrainingsPage,
            assessments_1.AssessmentsPage,
            learnings_1.LearningsPage,
            assessment_detail_1.AssessmentDetailPage,
            attempt_assessment_1.AttemptAssessmentPage,
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            angular_svg_round_progressbar_1.RoundProgressModule,
            ionic_angular_1.IonicModule.forRoot(app_component_1.LearningPin),
            storage_1.IonicStorageModule.forRoot({
                name: 'learning_pin',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
            firestore_1.AngularFirestoreModule.enablePersistence()
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.LearningPin,
            login_1.LoginPage,
            tabs_1.TabsPage,
            trainings_1.TrainingsPage,
            assessments_1.AssessmentsPage,
            learnings_1.LearningsPage,
            assessment_detail_1.AssessmentDetailPage,
            attempt_assessment_1.AttemptAssessmentPage,
        ],
        providers: [
            http_1.HTTP,
            keyboard_1.Keyboard,
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            global_1.GlobalProvider,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map