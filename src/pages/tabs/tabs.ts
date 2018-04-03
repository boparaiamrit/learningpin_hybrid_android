import {Component} from '@angular/core';
import {TrainingsPage} from "../trainings/trainings";
import {AssessmentsPage} from "../assessments/assessments";
import {LearningsPage} from "../learnings/learnings";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = TrainingsPage;
    tab2Root = AssessmentsPage;
    tab3Root = LearningsPage;

    constructor() {

    }
}
