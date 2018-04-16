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
const trainings_1 = require("../trainings/trainings");
const assessments_1 = require("../assessments/assessments");
const learnings_1 = require("../learnings/learnings");
const ionic_angular_1 = require("ionic-angular");
let TabsPage = class TabsPage {
    constructor() {
        this.tab1Root = trainings_1.TrainingsPage;
        this.tab2Root = assessments_1.AssessmentsPage;
        this.tab3Root = learnings_1.LearningsPage;
        // ionViewDidLoad() {
        //     let $this = this;
        //     setTimeout(function () {
        //         $this.lpTabs.select(1);
        //     }, 1000)
        // }
    }
};
__decorate([
    core_1.ViewChild('lpTabs'),
    __metadata("design:type", ionic_angular_1.Tabs)
], TabsPage.prototype, "lpTabs", void 0);
TabsPage = __decorate([
    core_1.Component({
        templateUrl: 'tabs.html'
    })
], TabsPage);
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map