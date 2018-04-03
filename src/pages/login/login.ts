import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Storage} from "@ionic/storage";
import * as _ from "lodash";
import {TabsPage} from "../tabs/tabs";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    @ViewChild('passwordInput') passwordInput;

    email: string = 'raman@gmail.com';
    password: string = 'secret';

    constructor(private globalProvider: GlobalProvider,
                private storage: Storage,
                public navCtrl: NavController) {
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

                    this.navCtrl.setRoot(TabsPage);
                }
            })
            .catch((response) => {
                if (!_.isEmpty(response['error'])) {
                    this.globalProvider.showToast('Invalid Credentials');
                }
            });
    }
}
