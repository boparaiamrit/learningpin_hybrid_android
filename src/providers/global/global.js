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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ionic_angular_1 = require("ionic-angular");
const http_1 = require("@ionic-native/http");
const storage_1 = require("@ionic/storage");
const _ = require("lodash");
let GlobalProvider = class GlobalProvider {
    constructor(loadingController, toastController, alertController, storage, http) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.storage = storage;
        this.http = http;
    }
    showLoading(show = true) {
        if (show) {
            this.loading = this.loadingController.create();
            this.loading.present();
        }
        else {
            if (!_.isEmpty(this.loading)) {
                this.loading.dismiss();
            }
        }
    }
    showToast(message = '') {
        let toast;
        toast = this.toastController.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
    showAlert(title = '', message = '') {
        let alert;
        alert = this.alertController.create({
            title: title,
            message: message
        });
        alert.present();
    }
    request(method = 'GET', api, params = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('url')
                .then((url) => {
                this.url = url;
            });
            yield this.storage.get('api_token')
                .then((token) => {
                this.token = token;
            });
            if (!_.isEmpty(this.token)) {
                headers['Authorization'] = 'Bearer ' + this.token;
            }
            let promise;
            switch (method) {
                case 'GET':
                    promise = this.http.get(this.url + api, params, headers);
                    break;
                case 'POST':
                    promise = this.http.post(this.url + api, params, headers);
                    break;
                default:
                    promise = this.http.get(this.url + api, params, headers);
                    break;
            }
            return promise;
        });
    }
};
GlobalProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ionic_angular_1.LoadingController,
        ionic_angular_1.ToastController,
        ionic_angular_1.AlertController,
        storage_1.Storage,
        http_1.HTTP])
], GlobalProvider);
exports.GlobalProvider = GlobalProvider;
//# sourceMappingURL=global.js.map