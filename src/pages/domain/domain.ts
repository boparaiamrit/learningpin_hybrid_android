import {Component} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Storage} from '@ionic/storage';
import {Domain} from '../../collections/domain';
import {GlobalProvider} from "../../providers/global/global";
import * as _ from "lodash";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";

@Component({
    selector: 'page-domain',
    templateUrl: 'domain.html',
})
export class DomainPage {
    domain: string = "staging";
    domains: Array<string> = [];

    constructor(private angularFirestore: AngularFirestore,
                private globalProvider: GlobalProvider,
                private storage: Storage,
                public navCtrl: NavController) {

        this.getDomains();
    }

    private getDomains() {
        let collection = this.angularFirestore.collection<Domain>('domains');
        collection.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Domain;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        }).subscribe((domains) => {
            domains.map((domain: Domain) => {
                this.domains.push(domain.name);
            });
        });
    }

    next() {
        let domain: string = this.domain.trim();

        if (_.isEmpty(domain)) {
            this.globalProvider.showToast('Domain is Empty.');
        } else {
            if (!_.includes(this.domains, domain)) {
                this.globalProvider.showToast('Invalid Domain.');
            } else {
                this.storage.set('domain', domain + '.ngrok.io');
                this.storage.set('url', 'https://' + domain + '.ngrok.io');
                this.navCtrl.push(LoginPage);
            }
        }
    }
}
