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
const global_1 = require("../../providers/global/global");
const moment = require("moment");
const _ = require("lodash");
let TrainingsPage = class TrainingsPage {
    constructor(navCtrl, navParams, globalProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalProvider = globalProvider;
        this.alertCtrl = alertCtrl;
        this.calSettings = {
            theme: 'ios',
            display: 'inline',
            controls: ['calendar'],
            select: 'multiple',
            readonly: true,
        };
        this.selectedDates = [];
        this.myTrainings = [];
    }
    ionViewDidLoad() {
        this.getTrainings();
    }
    getTrainings() {
        return __awaiter(this, void 0, void 0, function* () {
            let myTrainings = [];
            this.globalProvider.showLoading();
            yield this.globalProvider
                .request('GET', '/api/trainings')
                .then((response) => {
                if (response['status'] == 200) {
                    this.globalProvider.showLoading(false);
                    let data = JSON.parse(response['data']);
                    myTrainings = data['my_trainings'];
                }
            });
            this.myTrainings = myTrainings;
            this.selectedDates = yield _.map(myTrainings, function (training) {
                return moment(training['date_ymd']).toDate();
            });
            this.trainingCal.instance.option({
                defaultValue: this.selectedDates
            });
        });
    }
    onDayChange(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!event['selected']) {
                return false;
            }
            let selectedDate = moment(event['date']).format('YYYY-MM-DD');
            let selectedTraining = null;
            yield this.myTrainings.forEach(function (training) {
                if (training['date_ymd'] == selectedDate) {
                    selectedTraining = training;
                }
            });
            this.enrollTraining(selectedTraining);
        });
    }
    enrollTraining(training) {
        let $this = this;
        let alert = this.alertCtrl
            .create({
            title: '',
            message: '<div class="training-card training-popup-card">' +
                '<div>' +
                '<h4>' + training['name'] + '</h4>' +
                '<p class="date">' + training['date'] + '</p>' +
                '<p class="time">' + training['time'] + '</p>' +
                '</div>' +
                '</div>',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Enroll Now',
                    handler: () => {
                        $this.globalProvider.showLoading();
                        $this.globalProvider.request('POST', '/api/trainings/enroll/' + training['id'])
                            .then((response) => {
                            if (response['status'] == 200) {
                                $this.globalProvider.showLoading(false);
                                let data = JSON.parse(response['data']);
                                if (data['success']) {
                                    $this.globalProvider.showToast('User has been enrolled successfully.');
                                }
                                else {
                                    $this.globalProvider.showToast('User is already enrolled.');
                                }
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    }
};
__decorate([
    core_1.ViewChild('trainingCal'),
    __metadata("design:type", Object)
], TrainingsPage.prototype, "trainingCal", void 0);
TrainingsPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-trainings',
        templateUrl: 'trainings.html',
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.NavParams,
        global_1.GlobalProvider,
        ionic_angular_1.AlertController])
], TrainingsPage);
exports.TrainingsPage = TrainingsPage;
//# sourceMappingURL=trainings.js.map