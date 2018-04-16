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
const assessment_detail_1 = require("../assessment-detail/assessment-detail");
/**
 * Generated class for the AssessmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let AssessmentsPage = class AssessmentsPage {
    constructor(navCtrl, navParams, globalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalProvider = globalProvider;
        this.assessments = [];
        this.getAssessments();
    }
    getAssessments() {
        return __awaiter(this, void 0, void 0, function* () {
            let assessments = [];
            this.globalProvider.showLoading();
            yield this.globalProvider
                .request('GET', '/api/assessments')
                .then((response) => {
                if (response['status'] == 200) {
                    this.globalProvider.showLoading(false);
                    let data = JSON.parse(response['data']);
                    assessments = data['assessments'];
                }
            });
            this.assessments = assessments;
        });
    }
    assessmentDetail(assessment) {
        this.navCtrl.push(assessment_detail_1.AssessmentDetailPage, { assessment: assessment });
    }
};
AssessmentsPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-assessments',
        templateUrl: 'assessments.html',
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.NavParams,
        global_1.GlobalProvider])
], AssessmentsPage);
exports.AssessmentsPage = AssessmentsPage;
//# sourceMappingURL=assessments.js.map