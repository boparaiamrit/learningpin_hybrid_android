"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ionic_angular_1 = require("ionic-angular");
const status_bar_1 = require("@ionic-native/status-bar");
const splash_screen_1 = require("@ionic-native/splash-screen");
const storage_1 = require("@ionic/storage");
const tabs_1 = require("../pages/tabs/tabs");
const login_1 = require("../pages/login/login");
let LearningPin = class LearningPin {
    constructor(platform, statusBar, splashScreen, storage) {
        platform.ready()
            .then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            storage.get('is_logged_in')
                .then((isLoggedIn = false) => {
                if (isLoggedIn) {
                    this.rootPage = tabs_1.TabsPage;
                }
                else {
                    this.rootPage = login_1.LoginPage;
                }
            })
                .catch(() => {
                this.rootPage = login_1.LoginPage;
            });
        });
    }
};
LearningPin = __decorate([
    core_1.Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [ionic_angular_1.Platform,
        status_bar_1.StatusBar,
        splash_screen_1.SplashScreen,
        storage_1.Storage])
], LearningPin);
exports.LearningPin = LearningPin;
//# sourceMappingURL=app.component.js.map