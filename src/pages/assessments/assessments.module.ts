import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssessmentsPage } from './assessments';

@NgModule({
  declarations: [
    AssessmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssessmentsPage),
  ],
})
export class AssessmentsPageModule {}
