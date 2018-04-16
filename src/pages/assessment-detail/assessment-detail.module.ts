import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AssessmentDetailPage} from './assessment-detail';

@NgModule({
    declarations: [
        AssessmentDetailPage,
    ],
    imports: [
        IonicPageModule.forChild(AssessmentDetailPage),
    ],
})
export class AssessmentDetailPageModule {
}
