import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Assessment} from "../../collections/assessment";
import {AttemptAssessmentPage} from "../attempt-assessment/attempt-assessment";
import {AssessmentDetailPage} from "../assessment-detail/assessment-detail";

/**
 * Generated class for the AssessmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-assessments',
    templateUrl: 'assessments.html',
})
export class AssessmentsPage {
    assessments: Array<Assessment> = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private globalProvider: GlobalProvider) {

        this.getAssessments();
    }

    async getAssessments() {
        let assessments = [];

        this.globalProvider.showLoading();
        await this.globalProvider
            .request('GET', '/api/assessments')
            .then((response) => {
                if (response['status'] == 200) {
                    this.globalProvider.showLoading(false);
                    let data = JSON.parse(response['data']);

                    assessments = data['assessments'];
                }
            });

        this.assessments = assessments;
    }

    assessmentDetail(assessment: Assessment) {
        this.navCtrl.push(AssessmentDetailPage, {assessment: assessment});
    }
}
