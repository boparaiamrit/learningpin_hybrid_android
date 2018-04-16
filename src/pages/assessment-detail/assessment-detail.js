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
const ionic_angular_1 = require("ionic-angular");
const attempt_assessment_1 = require("../attempt-assessment/attempt-assessment");
/**
 * Generated class for the AssessmentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let AssessmentDetailPage = class AssessmentDetailPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.assessment = this.navParams.get('assessment');
    }
    cancelAssessment() {
        this.navCtrl.pop();
    }
    attemptAssessment(assessment) {
        this.navCtrl.setRoot(attempt_assessment_1.AttemptAssessmentPage, { assessment: assessment });
    }
};
AssessmentDetailPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-assessment-detail',
        templateUrl: 'assessment-detail.html',
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.NavParams])
], AssessmentDetailPage);
exports.AssessmentDetailPage = AssessmentDetailPage;
//# sourceMappingURL=assessment-detail.js.map