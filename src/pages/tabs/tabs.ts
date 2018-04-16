import {Component, ViewChild} from '@angular/core';
import {TrainingsPage} from "../trainings/trainings";
import {AssessmentsPage} from "../assessments/assessments";
import {LearningsPage} from "../learnings/learnings";
import {Tabs} from "ionic-angular";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = TrainingsPage;
    tab2Root = AssessmentsPage;
    tab3Root = LearningsPage;

    @ViewChild('lpTabs') lpTabs: Tabs;

    // ionViewDidLoad() {
    //     let $this = this;
    //     setTimeout(function () {
    //         $this.lpTabs.select(1);
    //     }, 1000)
    // }
}
