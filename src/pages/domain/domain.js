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
const firestore_1 = require("angularfire2/firestore");
const storage_1 = require("@ionic/storage");
const global_1 = require("../../providers/global/global");
const _ = require("lodash");
const ionic_angular_1 = require("ionic-angular");
const login_1 = require("../login/login");
let DomainPage = class DomainPage {
    constructor(angularFirestore, globalProvider, storage, navCtrl) {
        this.angularFirestore = angularFirestore;
        this.globalProvider = globalProvider;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.domain = "staging";
        this.domains = [];
        this.getDomains();
    }
    getDomains() {
        let collection = this.angularFirestore.collection('domains');
        collection.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }).subscribe((domains) => {
            domains.map((domain) => {
                this.domains.push(domain.name);
            });
        });
    }
    next() {
        let domain = this.domain.trim();
        if (_.isEmpty(domain)) {
            this.globalProvider.showToast('Domain is Empty.');
        }
        else {
            if (!_.includes(this.domains, domain)) {
                this.globalProvider.showToast('Invalid Domain.');
            }
            else {
                this.storage.set('domain', domain + '.learningpin.com');
                this.storage.set('url', 'https://' + domain + '.learningpin.com');
                this.navCtrl.push(login_1.LoginPage);
            }
        }
    }
};
DomainPage = __decorate([
    core_1.Component({
        selector: 'page-domain',
        templateUrl: 'domain.html',
    }),
    __metadata("design:paramtypes", [firestore_1.AngularFirestore,
        global_1.GlobalProvider,
        storage_1.Storage,
        ionic_angular_1.NavController])
], DomainPage);
exports.DomainPage = DomainPage;
//# sourceMappingURL=domain.js.map