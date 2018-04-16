import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import * as moment from 'moment';
import * as _ from 'lodash';
import {Training} from "../../collections/training";

@IonicPage()
@Component({
    selector: 'page-trainings',
    templateUrl: 'trainings.html',
})
export class TrainingsPage {
    @ViewChild('trainingCal') trainingCal: any;

    calSettings = {
        theme: 'ios',
        display: 'inline',
        controls: ['calendar'],
        select: 'multiple',
        readonly: true,
    };

    selectedDates: Array<Date> = [];
    trainings: Array<Training> = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private globalProvider: GlobalProvider,
        private alertCtrl: AlertController) {

        this.getTrainings();
    }

    async getTrainings() {
        let trainings = [];

        this.globalProvider.showLoading();
        await this.globalProvider
            .request('GET', '/api/trainings')
            .then((response) => {
                if (response['status'] == 200) {
                    this.globalProvider.showLoading(false);
                    let data = JSON.parse(response['data']);

                    trainings = data['my_trainings'];
                }
            });

        this.trainings = trainings;

        this.selectedDates = await _.map(trainings, function (training) {
            return moment(training['date_ymd']).toDate();
        });

        this.trainingCal.instance.option({
            defaultValue: this.selectedDates
        });
    }

    async onDayChange(event) {
        if (!event['selected']) {
            return false;
        }

        let selectedDate = moment(event['date']).format('YYYY-MM-DD');
        let selectedTraining: Training = null;
        await this.trainings.forEach(function (training) {
            if (training['date_ymd'] == selectedDate) {
                selectedTraining = training;
            }
        });

        this.enrollTraining(selectedTraining);
    }

    enrollTraining(training: Training) {
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
                                        } else {
                                            $this.globalProvider.showToast('User is already enrolled.')
                                        }
                                    }
                                });
                        }
                    }
                ]
            });
        alert.present();
    }
}
