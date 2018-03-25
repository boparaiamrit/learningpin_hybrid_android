import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Domain} from '../../collections/domain';
import {isEmpty} from 'lodash';
import {GlobalProvider} from "../../providers/global/global";


@Component({
    selector: 'page-domain',
    templateUrl: 'domain.html',
})
export class DomainPage{
    domain: string = "";
    collection: AngularFirestoreCollection<Domain>;

    domains$: Observable<Domain[]>;

    constructor(private angularFirestore: AngularFirestore,
                private globalProvider: GlobalProvider) {
        this.getDomains();
    }

    private getDomains() {
        this.collection = this.angularFirestore.collection<Domain>('domains$');
        this.domains$ = this.collection.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Domain;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });
    }

    next() {
        if (isEmpty(this.domain)) {
            this.globalProvider.showToast('Domain is Empty.');
        } else {
            this.domains$.subscribe((a) => {
                this.globalProvider.showToast('apple');
            });

            // if (checkDomain) {
            //     this.globalProvider.showToast('Invalid Domain.');
            // } else {
            //     this.globalProvider.showToast('Valid Domain.');
            // }
        }
    }
}
