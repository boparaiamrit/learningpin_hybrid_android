import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Assessment} from "../../collections/assessment";
import {Question} from "../../collections/question";
import * as moment from "moment";

@IonicPage()
@Component({
    selector: 'page-attempt-assessment',
    templateUrl: 'attempt-assessment.html',
})
export class AttemptAssessmentPage {
    timer: number;
    currentTime: number;
    showActionBtns: boolean = false;
    selectedQuestion: number = 0;
    isNextDisabled: boolean = false;
    isPrevDisabled: boolean = true;
    answers: object = {};

    assessment: Assessment;
    questions: Array<Question> = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private globalProvider: GlobalProvider) {
        this.assessment = this.navParams.get('assessment');

        this.getAssessment();
    }

    async getAssessment() {
        let $this = this;
        let assessment: Assessment = null;

        this.globalProvider.showLoading();
        await this.globalProvider
            .request('GET', '/api/assessments/' + this.assessment.assessment_id)
            .then((response) => {
                if (response['status'] == 200) {
                    this.globalProvider.showLoading(false);
                    let data = JSON.parse(response['data']);

                    assessment = data['assessment'];
                }
            });

        this.assessment = assessment;
        this.questions = assessment.questions;
        this.timer = assessment.time_in_sec;
        this.currentTime = assessment.time_in_sec;

        await this.questions.forEach(function (question) {
            $this.answers[question.id] = '';
        });

        let timeInterval = setInterval(() => {
            if (this.currentTime == 0) {
                clearInterval(timeInterval);
            }

            this.currentTime--;
        }, 1000);

        this.showActionBtns = true;
    }

    cancelAssessment() {

    }

    public differenceForHuman = function (input, units) {
        if (input == 0) {
            return 0;
        } else {
            let duration = moment().startOf('day').add(input, units);
            let format = "";
            if (duration.hour() > 0) {
                format += "H[h] ";
            }
            if (duration.minute() > 0) {
                format += "m[m] ";
            }
            if (duration.second() > 0) {
                format += "s[s] ";
            }
            return duration.format(format);
        }
    }

    nextQuestion() {
        if (this.selectedQuestion + 2 == this.questions.length) {
            this.isNextDisabled = true;
        }

        if (this.selectedQuestion + 1 < this.questions.length) {
            this.selectedQuestion += 1;
        }

        if (this.selectedQuestion > 0) {
            this.isPrevDisabled = false;
        }
    }

    prevQuestion() {
        if (this.selectedQuestion - 1 >= 0) {
            this.selectedQuestion -= 1;
        }

        if (this.selectedQuestion == 0) {
            this.isPrevDisabled = true;
        }

        if (this.selectedQuestion <= this.questions.length) {
            this.isNextDisabled = false;
        }
    }

    selectOption(id: number, option: string) {
        this.answers[id] = option;
        this.nextQuestion();
    }
}
