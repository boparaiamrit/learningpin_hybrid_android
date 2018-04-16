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
let AttemptAssessmentPage = class AttemptAssessmentPage {
    constructor(navCtrl, navParams, globalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalProvider = globalProvider;
        this.showActionBtns = false;
        this.selectedQuestion = 0;
        this.isNextDisabled = false;
        this.isPrevDisabled = true;
        this.answers = {};
        this.questions = [];
        this.differenceForHuman = function (input, units) {
            if (input == 0) {
                return 0;
            }
            else {
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
        };
        this.assessment = this.navParams.get('assessment');
        this.getAssessment();
    }
    getAssessment() {
        return __awaiter(this, void 0, void 0, function* () {
            let $this = this;
            let assessment = null;
            this.globalProvider.showLoading();
            yield this.globalProvider
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
            yield this.questions.forEach(function (question) {
                $this.answers[question.id] = '';
            });
            let timeInterval = setInterval(() => {
                if (this.currentTime == 0) {
                    clearInterval(timeInterval);
                }
                this.currentTime--;
            }, 1000);
            this.showActionBtns = true;
        });
    }
    cancelAssessment() {
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
    selectOption(id, option) {
        this.answers[id] = option;
        this.nextQuestion();
    }
};
AttemptAssessmentPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-attempt-assessment',
        templateUrl: 'attempt-assessment.html',
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.NavParams,
        global_1.GlobalProvider])
], AttemptAssessmentPage);
exports.AttemptAssessmentPage = AttemptAssessmentPage;
//# sourceMappingURL=attempt-assessment.js.map