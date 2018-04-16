import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AttemptAssessmentPage} from './attempt-assessment';

@NgModule({
    declarations: [
        AttemptAssessmentPage,
    ],
    imports: [
        IonicPageModule.forChild(AttemptAssessmentPage),
    ],
})
export class AttemptAssessmentPageModule {
}
