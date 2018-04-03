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
const global_1 = require("../../providers/global/global");
const storage_1 = require("@ionic/storage");
const _ = require("lodash");
const tabs_1 = require("../tabs/tabs");
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let LoginPage = class LoginPage {
    constructor(globalProvider, storage, navCtrl) {
        this.globalProvider = globalProvider;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.email = 'raman@gmail.com';
        this.password = 'secret';
    }
    moveToPassword() {
        this.passwordInput.setFocus();
    }
    login() {
        this.globalProvider.showLoading();
        this.globalProvider
            .request('POST', '/api/login', {
            email: this.email,
            password: this.password
        })
            .then(response => {
            if (response['status'] == 200) {
                this.globalProvider.showLoading(false);
                let data = JSON.parse(response['data']);
                let user = data['user'];
                this.storage.set('api_token', user['api_token']);
                this.storage.set('user', user);
                this.storage.set('is_logged_in', true);
                this.navCtrl.setRoot(tabs_1.TabsPage);
            }
        })
            .catch((response) => {
            if (!_.isEmpty(response['error'])) {
                this.globalProvider.showToast('Invalid Credentials');
            }
        });
    }
};
__decorate([
    core_1.ViewChild('passwordInput'),
    __metadata("design:type", Object)
], LoginPage.prototype, "passwordInput", void 0);
LoginPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [global_1.GlobalProvider,
        storage_1.Storage,
        ionic_angular_1.NavController])
], LoginPage);
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.js.map