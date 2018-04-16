import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Assessment} from "../../collections/assessment";
import {AttemptAssessmentPage} from "../attempt-assessment/attempt-assessment";

/**
 * Generated class for the AssessmentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-assessment-detail',
    templateUrl: 'assessment-detail.html',
})
export class AssessmentDetailPage {

    assessment: Assessment;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
        this.assessment = this.navParams.get('assessment');
    }

    cancelAssessment() {
        this.navCtrl.pop();
    }

    attemptAssessment(assessment: Assessment) {
        this.navCtrl.setRoot(AttemptAssessmentPage, {assessment: assessment});
    }
}
