import {Injectable} from '@angular/core';
import {Alert, AlertController, Loading, LoadingController, Toast, ToastController} from 'ionic-angular';
import {HTTP, HTTPResponse} from '@ionic-native/http';
import {Storage} from '@ionic/storage';
import * as _ from "lodash";

@Injectable()
export class GlobalProvider {
    url: string;
    token: string;
    private loading: Loading;

    constructor(private loadingController: LoadingController,
                private toastController: ToastController,
                private alertController: AlertController,
                private storage: Storage,
                private http: HTTP) {
    }

    public showLoading(show: boolean = true) {
        if (show) {
            this.loading = this.loadingController.create();
            this.loading.present();
        } else {
            if (this.loading) {
                this.loading.dismiss();
            }
        }
    }

    public showToast(message: any = '') {
        let toast: Toast;
        toast = this.toastController.create({
            message: message,
            duration: 3000,
            position: 'top'
        });

        toast.present();
    }

    public showAlert(title: any = '', message: any = '') {
        let alert: Alert;
        alert = this.alertController.create({
            title: title,
            message: message
        });

        alert.present();
    }

    public async request(method: string = 'GET',
                         api: string,
                         params: any = {},
                         headers: any = {}) {
        await this.storage.get('url')
            .then((url) => {
                this.url = url
            });

        await this.storage.get('api_token')
            .then((token) => {
                this.token = token
            });

        if (!_.isEmpty(this.token)) {
            headers['Authorization'] = 'Bearer ' + this.token;
        }

        let promise: Promise<HTTPResponse>;
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
    }
}
